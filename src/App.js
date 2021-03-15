import { useEffect, useState } from 'react'
import he from 'he'

import {
  useQueryParam,
  NumberParam,
  StringParam,
  BooleanParam,
  withDefault
} from 'use-query-params'

import {
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box
} from '@material-ui/core'

import {
  Facebook,
  Help,
  InsertLink,
  LinkedIn,
  Mail,
  Twitter
} from '@material-ui/icons'

import { rollups, group, sum, ascending, descending } from 'd3-array'
import { formatLocale } from 'd3-format'
import { timeFormatLocale } from 'd3-time-format'
import numberItIT from 'd3-format/locale/it-IT.json'
import timeItIT from 'd3-time-format/locale/it-IT.json'

import './App.css'

function App () {
  const numberLoc = formatLocale(numberItIT)
  const fmtInt = numberLoc.format(',d')
  const fmtPerc = numberLoc.format('.1%')

  const timeLoc = timeFormatLocale(timeItIT)
  const fmtDate = timeLoc.format('%A %e %B %Y')
  const fmtMonthYear = timeLoc.format('%B %Y')
  const fmtISODate = timeLoc.format('%Y-%m-%d')

  // Embed mode
  const [isEmbed, setEmbed] = useQueryParam('embed', withDefault(BooleanParam, false))

  // Daily data indexed by area
  const [indexedData, setIndexedData] = useState({})
  // Daily data per area
  const [dataPerArea, setDataPerArea] = useState([])

  // Population indexed by area
  const [indexedPopulation, setIndexedPopulation] = useState({})
  // Population per area
  const [populationPerArea, setPopulationPerArea] = useState(6e7)
  // Population fraction to be vaccinated (final goal)
  const [populationFraction, setPopulationFraction] = useQueryParam('populationFraction', withDefault(NumberParam, 0.7))

  // All available area
  const [areas, setAreas] = useState([])
  // Selected area
  const [area, setArea] = useQueryParam('area', withDefault(StringParam, 'ITA'))

  // Last data update
  const [lastUpdate, setLastUpdate] = useState(new Date())
  // Width of average time window
  const [lastDays, setLastDays] = useQueryParam('lastDays', withDefault(NumberParam, 7))
  // Selected milestone when population fraction will be vaccinated
  const [lastDate, setLastDate] = useState(new Date())

  // Selected doses per person
  const [doses, setDoses] = useQueryParam('doses', withDefault(NumberParam, 2))

  // Total number of administrations
  const [administrations, setAdministrations] = useState(0)
  // Total number of vaccinations (second dose administrations)
  const [vaccinatedPeople, setVaccinatedPeople] = useState(0)
  // Remaining administrations to final goal
  const [remainingAdministrations, setRemainingAdministrations] = useState(0)
  // Remaining days to final goal
  const [remainingDays, setRemainingDays] = useState(0)
  // Rate of administrations
  const [administrationsPerDay, setAdministrationsPerDay] = useState([])
  // Rate of vaccinations (second dose administrations)
  const [vaccinatedPeoplePerDay, setVaccinatedPeoplePerDay] = useState([])
  // Average rate of administrations in last days
  const [avgAdministrationsLastDays, setAvgAdministrationsLastDays] = useState(0)
  // Average rate of vaccinations in last days
  const [avgVaccinatedPeopleLastDays, setAvgVaccinatedPeopleLastDays] = useState(0)
  // Selected final goal month
  const [targetMonth, setTargetMonth] = useQueryParam('targetMonth', withDefault(NumberParam, 8))
  // Selected final goal year
  const [targetYear, setTargetYear] = useQueryParam('targetYear', withDefault(NumberParam, (new Date()).getFullYear()))
  // Selected final goal date
  const [targetDate, setTargetDate] = useState(new Date())
  // Average rate of administrations to reach the final goal within selected date
  const [targetAvgAdministrationsPerDay, setTargetAvgAdministrationsPerDay] = useState(0)

  // Next milestone
  const [nextMilestone, setNextMilestone] = useState({})
  // Remaining days to next milestone
  const [nextMilestoneRemainingDays, setNextMilestoneRemainingDays] = useState(0)
  // Remaining administrations to next milestone
  const [nextMilestoneRemainingAdministrations, setNextMilestoneRemainingAdministrations] = useState(0)
  // Rate required for the next milestone
  const [nextMilestoneTargetAvgAdministrationsPerDay, setNextMilestoneTargetAvgAdministrationsPerDay] = useState(0)

  const [isReady, setIsReady] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  function handleOpenDialog () {
    setDialogOpen(true)
  }

  function handleCloseDialog () {
    setDialogOpen(false)
  }

  const handleInputValue = (setFunc, eventValue, min, max) => {
    const value = eventValue > max ? max : eventValue < min ? min : eventValue
    setFunc(value)
  }

  // Download all requested data on page load
  useEffect(() => {
    Promise.all([
      window.fetch('../vaccinipertutti-data/last-update-dataset.json')
        .then(data => data.json())
        .then(data => { setLastUpdate(new Date(data.ultimo_aggiornamento)) }),
      window.fetch('../vaccinipertutti-data/popolazione_residente_2020.json')
        .then(data => data.json())
        .then(data => data.sort((a, b) => ascending(a.order, b.order)))
        .then(data => {
          setAreas(data)
          setIndexedPopulation(Object.fromEntries(group(data, d => d.area)))
        }),
      window.fetch('../vaccinipertutti-data/campaign-milestones.json')
        .then(data => data.json())
        .then(data => data.sort((a, b) => ascending(a.startDate, b.startDate)))
        .then(data => data.filter(d => (new Date(d.startDate) < new Date()) && (new Date(d.endDate) > new Date())))
        .then(data => { setNextMilestone(data?.[0]) }),
      window.fetch('../vaccinipertutti-data/somministrazioni-vaccini-summary-latest.json')
        .then(res => res.json())
        .then(res => res.data)
        .then(data => data.filter(d => d.area !== 'ITA'))
        .then(data => data.sort((a, b) => descending(a.data_somministrazione, b.data_somministrazione)))
        .then(data => {
          setIndexedData({
            ITA: Array
              .from(group(data, d => d.data_somministrazione).values())
              .map(d => d.reduce(
                (o, v) => ({
                  area: 'ITA',
                  nome_area: 'Italia',
                  data_somministrazione: v.data_somministrazione,
                  totale: (o.totale ?? 0) + v.totale,
                  seconda_dose: (o.seconda_dose ?? 0) + v.seconda_dose
                }),
                {})
              ),
            ...Object.fromEntries(group(data, d => d.area))
          })
        })
    ]).then(() => { setIsReady(true) })
  }, [])

  // On user selection of month and year of final goal, compute full date
  useEffect(() => {
    const currentDate = new Date()
    const currentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
    const selectedMonth = new Date(targetYear, targetMonth + 1, 0)

    // Check to avoid selection of past months
    if (selectedMonth > currentMonth) {
      setTargetDate(new Date(targetYear, targetMonth + 1, 0))
    } else {
      setTargetMonth(targetDate.getMonth())
      setTargetYear(targetDate.getFullYear())
    }
  }, [targetMonth, targetYear])

  // On user selection of area, update administrations data per area
  useEffect(() => {
    setDataPerArea(indexedData[area] || [])
  }, [indexedData, area])

  // On user selection of area, update population per area
  useEffect(() => {
    if (indexedPopulation[area]) {
      setPopulationPerArea(indexedPopulation[area][0].totale)
    }
  }, [indexedPopulation, area])

  useEffect(() => {
    // Compute partial aggregation (sum of administrations) per day
    setAdministrationsPerDay(
      rollups(
        dataPerArea,
        v => sum(v, d => d.totale),
        d => fmtISODate(new Date(d.data_somministrazione))
      )
    )

    // Compute partial aggregation (sum of vaccinated people) per day
    setVaccinatedPeoplePerDay(
      rollups(
        dataPerArea,
        v => sum(v, d => d.seconda_dose),
        d => fmtISODate(new Date(d.data_somministrazione))
      )
    )

    // Update total administrations
    setAdministrations(
      sum(dataPerArea, d => d.totale)
    )

    // Update total vaccinated people
    setVaccinatedPeople(
      sum(dataPerArea, d => d.seconda_dose)
    )
  }, [dataPerArea])

  // Compute average rate of administrations to reach the final goal within selected date
  useEffect(() => {
    setTargetAvgAdministrationsPerDay(remainingAdministrations / (targetDate - (new Date())) * 1000 * 60 * 60 * 24)
  }, [targetDate, remainingAdministrations])

  // Compute administrations rate in last days, filtering out today administrations to avoid underestimation
  useEffect(() => {
    setAvgAdministrationsLastDays(
      sum(
        administrationsPerDay.filter(d => d[0] !== fmtISODate(new Date())).slice(0, lastDays),
        d => d[1]
      ) / lastDays
    )
  }, [administrationsPerDay, lastDays])

  // Compute vaccinated people rate in last days, filtering out today administrations to avoid underestimation
  useEffect(() => {
    setAvgVaccinatedPeopleLastDays(
      sum(
        vaccinatedPeoplePerDay.filter(d => d[0] !== fmtISODate(new Date())).slice(0, lastDays),
        d => d[1]
      ) / lastDays
    )
  }, [vaccinatedPeoplePerDay, lastDays])

  // Compute remaining administrations for final goal
  useEffect(() => {
    setRemainingAdministrations(
      doses * populationPerArea * populationFraction - administrations
    )
  }, [doses, populationPerArea, populationFraction, administrations])

  // Compute remaining days and date of final goal
  useEffect(() => {
    const days = remainingAdministrations / avgAdministrationsLastDays
    const datetime = new Date()
    datetime.setDate(datetime.getDate() + Math.round(days))
    setRemainingDays(days)
    setLastDate(datetime)
  }, [remainingAdministrations, avgAdministrationsLastDays])

  // Compute remaining days and administrations for next milestone
  useEffect(() => {
    setNextMilestoneRemainingDays((new Date(nextMilestone.endDate) - new Date()) / (1000 * 60 * 60 * 24))
    setNextMilestoneRemainingAdministrations((doses * nextMilestone.total) - administrations)
  }, [doses, nextMilestone, administrations])

  // Compute requested average rate of administrations to reach next milestone
  useEffect(() => {
    setNextMilestoneTargetAvgAdministrationsPerDay(nextMilestoneRemainingAdministrations / nextMilestoneRemainingDays)
  }, [nextMilestoneRemainingAdministrations, nextMilestoneRemainingDays])

  return (
    <>
      <Container className={`container ${isEmbed ? 'slim' : 'boxed'}`} maxWidth='md' style={{ opacity: +isReady }}>
        <Grid container direction='column' justify='center' spacing={2}>
          <Grid item className='footerText'>
            <img src='syringe.png' className='syringe small' />
          </Grid>
          <Grid item className='footerText'>
            Che cos'è questa pagina? <a href='#' onClick={handleOpenDialog}>Leggi qui!</a>
          </Grid>
          <Grid item className='supTitle'>Termine previsto della campagna vaccinale in <em>{indexedPopulation[area]?.[0]?.nome}</em> contro Sars-CoV-2.</Grid>
          <Grid item component='h1' className='mainTitle'>{fmtDate(lastDate)}</Grid>
          <Grid item className='footerText'>
            Come abbiamo calcolato questa data? <a href='https://github.com/ondata/vaccinipertutti/blob/main/README.md#le-stime' target='_blank' rel='noreferrer'>Ecco tutte le info!</a>
          </Grid>
          <Grid item className='mainText'>
            In <Select value={areas.length ? area : ''} onChange={e => setArea(e.target.value)}>{areas.map(a => <MenuItem key={a.area} value={a.area}>{a.nome}</MenuItem>)}</Select> si è iniziato a somministrare il primo vaccino il <em>27 dicembre 2020</em>.
            A {lastUpdate.getDate() === (new Date()).getDate() ? 'oggi' : 'ieri'}, <em>{fmtDate(lastUpdate).toLowerCase()}</em>, sono state somministrate <em>{fmtInt(administrations)}</em> dosi,
            ma ne mancano <em>{fmtInt(remainingAdministrations)}</em> per vaccinare il <TextField value={populationFraction * 100} onChange={e => setPopulationFraction(+e.target.value / 100)} onBlur={e => handleInputValue(setPopulationFraction, +e.target.value / 100, 0.6, 1)} inputProps={{ type: 'number', min: 60, max: 100, step: 5 }} InputProps={{ endAdornment: <InputAdornment position='end'>%</InputAdornment> }} /> della popolazione
            con <TextField value={doses} onChange={e => setDoses(+e.target.value)} onBlur={e => handleInputValue(setDoses, +e.target.value, 1, 2)} inputProps={{ type: 'number', min: 1, max: 2, step: 1 }} /> dosi a testa.
          </Grid>
          <Grid item className='mainText'>
            Al ritmo di <em>{fmtInt(avgAdministrationsLastDays)}</em> somministrazioni al giorno tenuto negli ultimi <TextField value={lastDays} onChange={e => setLastDays(+e.target.value)} onBlur={e => handleInputValue(setLastDays, +e.target.value, 1, administrationsPerDay.length)} inputProps={{ type: 'number', min: 1, max: administrationsPerDay.length, step: 1 }} /> giorni,
            mancano <em>{fmtInt(Math.floor(remainingDays / 365))} anni, {fmtInt(Math.floor((remainingDays % 365) / 30))} mesi e {fmtInt(Math.floor(remainingDays % 12))} giorni</em> prima di raggiungere l'obiettivo.
            Per farlo entro <Select value={targetMonth} onChange={e => setTargetMonth(+e.target.value)}>{timeItIT.months.map((m, i) => <MenuItem key={i} value={i}>{m.toLocaleLowerCase()}</MenuItem>)}</Select> <TextField value={targetYear} onChange={e => setTargetYear(+e.target.value)} onBlur={e => handleInputValue(setTargetYear, +e.target.value, (new Date()).getFullYear(), 2030)} inputProps={{ type: 'number', min: (new Date()).getFullYear(), max: 2030, step: 1 }} /> bisognerebbe somministrare una media di <em>{fmtInt(targetAvgAdministrationsPerDay)}</em> dosi al giorno.
          </Grid>
          <Grid item className='mainText'>
            Attualmente le persone vaccinate con due dosi sono <em>{fmtInt(vaccinatedPeople)}</em> (una media di <em>{fmtInt(avgVaccinatedPeopleLastDays)}</em> al giorno), pari allo <em>{fmtPerc(vaccinatedPeople / (populationFraction * populationPerArea))}</em> dell'obiettivo di copertura vaccinale della popolazione.
          </Grid>
          {
            area === 'ITA' ? (
              nextMilestoneTargetAvgAdministrationsPerDay < avgAdministrationsLastDays
                ? (
                  <Grid item className='mainText'>
                    Il ritmo attuale è in linea con il prossimo obiettivo di vaccinare <em>{fmtInt(nextMilestone.total)}</em> persone ({nextMilestone.people?.map(p => p.type).join(', ')}) entro <em>{fmtMonthYear(new Date(nextMilestone.endDate))}</em>.
                  </Grid>
                ) : (
                  <Grid item className='mainText'>
                    Il ritmo attuale dovrebbe aumentare del <em>{fmtPerc((nextMilestoneTargetAvgAdministrationsPerDay - avgAdministrationsLastDays) / nextMilestoneTargetAvgAdministrationsPerDay)}</em> per raggiungere il prossimo obiettivo di vaccinare <em>{fmtInt(nextMilestone.total)}</em> persone ({nextMilestone.people?.map(p => p.type).join(', ')}) entro <em>{fmtMonthYear(new Date(nextMilestone.endDate))}</em>.
                  </Grid>
                )
              ) : null
          }
          <Grid item className='footerText'>
            <img src='syringe.png' className='syringe large' />
          </Grid>
          <Grid item className='footerText'>
            Un progetto a cura dell'<a href='https://ondata.it' target='_blank' rel='noreferrer'>Associazione onData</a>.
          </Grid>
          <Grid item className='footerText'>
            Perché l'abbiamo fatto? <a href='https://github.com/ondata/vaccinipertutti/blob/main/README.md#frequently-asked-question-faq' target='_blank' rel='noreferrer'>Scoprilo!</a>
          </Grid>
          <Grid item className='footerText'>
            E se ti piace, sottoscrivi la campagna <a href='https://datibenecomune.it/' target='_blank' rel='noreferrer'>#datiBeneComune</a>!
          </Grid>
          {
            isEmbed || (
              <>
                <Box className='Flower lt' />
                <Box className='Flower lb' />
                <Box className='Cube rt icon'>
                  <Grid container justify='center' alignContent='center' direction='column'>
                    <Grid item xs><Help color='primary' onClick={handleOpenDialog} /></Grid>
                    <Grid item xs><a title='Condividi su Twitter' href={`https://twitter.com/share?text="${he.decode(`Termine previsto della campagna vaccinale in ${indexedPopulation[area]?.[0]?.nome} contro Sars-CoV-2: ${fmtDate(lastDate)}`)}" via @ondatait&hashtags=datiBeneComune&url=${encodeURIComponent(window.location.href)}`} target='_blank' rel='noreferrer'><Twitter color='primary' /></a></Grid>
                    <Grid item xs><a title='Condividi su Facebook' href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&hashtag=${encodeURIComponent('#datiBeneComune')}`} target='_blank' rel='noreferrer'><Facebook color='primary' /></a></Grid>
                    <Grid item xs><a title='Condividi su LinkedIn' href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`} target='_blank' rel='noreferrer'><LinkedIn color='primary' /></a></Grid>
                    <Grid item xs><a title='Condividi via e-mail' href={`mailto:?subject="${he.decode(`#datiBeneComune - Termine previsto della campagna vaccinale in ${indexedPopulation[area]?.[0]?.nome} contro Sars-CoV-2: ${fmtDate(lastDate)}`)}" via onData - APS&body=${he.decode(`In ${indexedPopulation[area]?.[0]?.nome} si è iniziato a somministrare il primo vaccino il 27 dicembre 2020`)}... Continua a leggere su ${encodeURIComponent(window.location.href)}`} target='_blank' rel='noreferrer'><Mail color='primary' /></a></Grid>
                    <Grid item xs><a title='Permalink' href={window.location.href} target='_blank' rel='noreferrer'><InsertLink color='primary' /></a></Grid>
                  </Grid>
                </Box>
                <Box className='Flower rb' />
              </>
            )
          }
        </Grid>
      </Container>
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>"Vaccini per tutti" by onData</DialogTitle>
        <DialogContent>
          <DialogContentText>
            "Vaccini per tutti" è un'<b>applicazione sperimentale non ufficiale</b> che permette di stimare i tempi di avanzamento della campagna di vaccinazione in Italia sulla base degli open data istituzionali del <a href='https://github.com/italia/covid19-opendata-vaccini/' target='_blank' rel='noreferrer'>Commissario straordinario per l'emergenza Covid-19 - Presidenza del Consiglio dei Ministri</a>, dell'<a href='https://www.epicentro.iss.it/vaccini/covid-19-piano-vaccinazione' target='_blank' rel='noreferrer'>Istituto Superiore di Sanità</a> e di <a href='http://demo.istat.it/popres/index.php?anno=2020&lingua=ita' target='_blank' rel='noreferrer'>ISTAT</a>.
          </DialogContentText>
          <DialogContentText>
            <img width='100%' src='card.png' />
          </DialogContentText>
          <DialogContentText>
            Come funziona? In base all'andamento della campagna di vaccinazione (quante somministrazioni effettuate in Italia nei giorni passati) stimiamo quanto tempo resta per raggiungere gli obiettivi di copertura vaccinale della popolazione generale e di quella dei soggetti ad alta priorità, così come definiti nel <a href='https://www.epicentro.iss.it/vaccini/covid-19-piano-vaccinazione' target='_blank' rel='noreferrer'>piano nazionale di vaccinazione</a>.
            Puoi modificare i parametri che influiscono sul calcolo, prova a interagire con i numeri su <em className='bg'>sfondo colorato</em> ed esplora tutti gli scenari possibili. Trovi ulteriori dettagli in <a href='https://github.com/ondata/vaccinipertutti/blob/main/README.md#le-stime' target='_blank' rel='noreferrer'>questa pagina</a>.
          </DialogContentText>
          <DialogContentText>
            Per approfondire le motivazioni dietro lo sviluppo di questo lavoro, il significato e i limiti dei dati a disposizione, le modalità di calcolo e l'affidabilità delle stime presentate puoi leggere le nostre <a href='https://github.com/ondata/vaccinipertutti/blob/main/README.md#frequently-asked-question-faq' target='_blank' rel='noreferrer'>FAQ</a> (Frequently Asked Questions).
          </DialogContentText>
          <DialogContentText>
            Se hai un dubbio o vuoi fare una segnalazione, puoi <a href='https://github.com/ondata/vaccinipertutti/issues' target='_blank' rel='noreferrer'>aprire una issue</a>.
          </DialogContentText>
          <DialogContentText>
            Tutte le informazioni contenute in questa pagina sono da prendersi <a href='https://en.wikipedia.org/wiki/As_is' target='_blank' rel='noreferrer'>così come sono</a>, senza nessuna garanzia di correttezza o pretesa di affidabilità.
            I dati sottostanti sono aggiornati quotidianamente dalle fonti indicate e le stime cambiano quindi ogni giorno seguendo l'andamento della campagna vaccinale.
          </DialogContentText>
          <DialogContentText>
            L'applicazione è sviluppata e mantenuta da <a href='https://github.com/jenkin' target='_blank' rel='noreferrer'>jenkin</a> per <a href='https://ondata.it/' target='_blank' rel='noreferrer'>onData APS</a>, associazione di promozione sociale che promuove l'apertura dei dati pubblici per renderli accessibili a tutte e tutti.
          </DialogContentText>
          <DialogContentText>
            Il codice sorgente è open source e rilasciato sotto <a href='https://tldrlegal.com/license/mit-license' target='_blank' rel='noreferrer'>licenza MIT</a> su Github: <a href='https://github.com/ondata/vaccinipertutti' target='_blank' rel='noreferrer'>ondata/vaccinipertutti</a>. Questa pagina è ospitata dal servizio <a href='https://pages.github.com/' target='_blank' rel='noreferrer'>Github Pages</a> e fa esclusivamente uso di cookie tecnici: non traccia né profila in alcun modo gli utenti.
          </DialogContentText>
          <DialogContentText>
            Puoi sostenere l'attività di onData in molti modi, <a href='https://sostieni.ondata.it/' target='_blank' rel='noreferrer'>dai un'occhiata</a>!
          </DialogContentText>
        </DialogContent>
        <DialogActions justify='flex-start'>
          <Button color='primary' href='https://datibenecomune.it/' target='_blank' rel='noreferrer'>
            Sottoscrivi la campagna #datiBeneComune
          </Button>
          <Button onClick={handleCloseDialog} color='secondary' variant='contained' autoFocus>
            Ho capito, grazie!
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default App
