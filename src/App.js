import { Fragment , useEffect, useState } from 'react'



import {
  useQueryParam,
  NumberParam,
  StringParam,
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

import { Help } from '@material-ui/icons'

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
  const fmtISODate = timeLoc.format('%Y-%M-%d')

  const [indexedData, setIndexedData] = useState({})
  const [data, setData] = useState([])

  const [indexedPopulation, setIndexedPopulation] = useState({})
  const [population, setPopulation] = useState(6e7)
  const [populationFraction, setPopulationFraction] = useQueryParam('populationFraction', withDefault(NumberParam, 0.7))

  const [areas, setAreas] = useState([])
  const [area, setArea] = useQueryParam('area', withDefault(StringParam, 'ITA'))

  const [lastUpdate, setLastUpdate] = useState(new Date())
  const [lastDays, setLastDays] = useQueryParam('lastDays', withDefault(NumberParam, 7))
  const [lastDate, setLastDate] = useState(new Date())

  const [doses, setDoses] = useQueryParam('doses', withDefault(NumberParam, 2))

  const [administrations, setAdministrations] = useState(0)
  const [remainingAdministrations, setRemainingAdministrations] = useState(0)
  const [remainingDays, setRemainingDays] = useState(0)
  const [administrationsPerDay, setAdministrationsPerDay] = useState([])
  const [avgAdministrationsLastDays, setAvgAdministrationsLastDays] = useState([])

  const [targetMonth, setTargetMonth] = useQueryParam('targetMonth', withDefault(NumberParam, 8))
  const [targetYear, setTargetYear] = useQueryParam('targetYear', withDefault(NumberParam, (new Date()).getFullYear()))
  const [targetDate, setTargetDate] = useState(new Date())
  const [targetAvgAdministrationsPerDay, setTargetAvgAdministrationsPerDay] = useState(0)

  const [nextMilestone, setNextMilestone] = useState({})
  const [nextMilestoneRemainingDays, setNextMilestoneRemainingDays] = useState(0)
  const [nextMilestoneRemainingAdministrations, setNextMilestoneRemainingAdministrations] = useState(0)
  const [nextMilestoneTargetAvgAdministrationsPerDay, setNextMilestoneTargetAvgAdministrationsPerDay] = useState(0)

  const [dialogOpen, setDialogOpen] = useState(false)

  function handleOpenDialog () {
    setDialogOpen(true)
  }

  function handleCloseDialog () {
    setDialogOpen(false)
  }

  useEffect(() => {
    window.fetch('../vaccinipertutti-data/last-update-dataset.json')
      .then(data => data.json())
      .then(data => { setLastUpdate(new Date(data.ultimo_aggiornamento)) })
    window.fetch('../vaccinipertutti-data/popolazione_residente_2020.json')
      .then(data => data.json())
      .then(data => data.sort((a, b) => ascending(a.order, b.order)))
      .then(data => {
        setAreas(data)
        setIndexedPopulation(Object.fromEntries(group(data, d => d.area)))
      })
    window.fetch('../vaccinipertutti-data/campaign-milestones.json')
      .then(data => data.json())
      .then(data => data.sort((a, b) => ascending(a.startDate, b.startDate)))
      .then(data => data.filter(d => (new Date(d.startDate) < new Date()) && (new Date(d.endDate) > new Date())))
      .then(data => { setNextMilestone(data?.[0]) })
    window.fetch('../vaccinipertutti-data/somministrazioni-vaccini-summary-latest.json')
      .then(res => res.json())
      .then(res => res.data)
      .then(data => data.sort((a, b) => descending(a.data_somministrazione, b.data_somministrazione)))
      .then(data => {
        setIndexedData(Object.fromEntries(group(data, d => d.area)))
      })
  }, [])

  useEffect(() => {
    const currentDate = new Date()
    const currentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
    const selectedMonth = new Date(targetYear, targetMonth + 1, 0)
    console.log(currentMonth, selectedMonth)
    if (selectedMonth > currentMonth) {
      setTargetDate(new Date(targetYear, targetMonth + 1, 0))
    } else {
      setTargetMonth(targetDate.getMonth())
      setTargetYear(targetDate.getFullYear())
    }
  }, [targetMonth, targetYear])

  useEffect(() => {
    setData(indexedData[area] || [])
  }, [indexedData, area])

  useEffect(() => {
    if (indexedPopulation[area]) {
      setPopulation(indexedPopulation[area][0].totale)
    }
  }, [indexedPopulation, area])

  useEffect(() => {
    setAdministrationsPerDay(
      rollups(
        data,
        v => sum(v, d => d.totale),
        d => fmtISODate(new Date(d.data_somministrazione))
      )
    )

    setAdministrations(
      sum(data, d => d.totale)
    )
  }, [data])

  useEffect(() => {
    setTargetAvgAdministrationsPerDay(remainingAdministrations / (targetDate - (new Date())) * 1000 * 60 * 60 * 24)
  }, [targetDate, remainingAdministrations])

  useEffect(() => {
    setAvgAdministrationsLastDays(
      sum(
        administrationsPerDay.slice(1, lastDays + 1),
        d => d[1]
      ) / lastDays
    )
  }, [administrationsPerDay, lastDays])

  useEffect(() => {
    setRemainingAdministrations(
      doses * population * populationFraction - administrations
    )
  }, [doses, population, populationFraction, administrations])

  useEffect(() => {
    const days = remainingAdministrations / avgAdministrationsLastDays
    const datetime = new Date()
    datetime.setDate(datetime.getDate() + Math.round(days))
    setRemainingDays(days)
    setLastDate(datetime)
  }, [remainingAdministrations, avgAdministrationsLastDays])

  useEffect(() => {
    setNextMilestoneRemainingDays((new Date(nextMilestone.endDate) - new Date()) / (1000 * 60 * 60 * 24))
    setNextMilestoneRemainingAdministrations((doses * nextMilestone.total) - administrations)
  }, [doses, nextMilestone, administrations])

  useEffect(() => {
    setNextMilestoneTargetAvgAdministrationsPerDay(nextMilestoneRemainingAdministrations / nextMilestoneRemainingDays)
  }, [nextMilestoneRemainingAdministrations, nextMilestoneRemainingDays])

  return (
    <>
      <Container className='container' maxWidth='md' style={{ opacity: +!!data.length }}>
        <Grid container direction='column' justify='center' spacing={2}>
          <Grid item className='supTitle'>Termine previsto della campagna vaccinale in <em>{indexedPopulation[area]?.[0]?.nome}</em> contro Sars-CoV-2.</Grid>
          <Grid item component='h1' className='mainTitle'>{fmtDate(lastDate)}</Grid>
          <Grid item className='mainText'>
            In <Select value={areas.length ? area : ''} onChange={e => setArea(e.target.value)}>{areas.map(a => <MenuItem key={a.area} value={a.area}>{a.nome}</MenuItem>)}</Select> si è iniziato a somministrare il primo vaccino il <em>27 dicembre 2020</em>.
            A {lastUpdate.getDate() === (new Date()).getDate() ? 'oggi' : 'ieri'}, <em>{fmtDate(lastUpdate).toLowerCase()}</em>, sono state somministrate <em>{fmtInt(administrations)}</em> dosi,
            ma ne mancano <em>{fmtInt(remainingAdministrations)}</em> per vaccinare il <TextField value={populationFraction * 100} onChange={e => setPopulationFraction(+e.target.value / 100)} size='small' inputProps={{ type: 'number', min: 60, max: 100, step: 5 }} InputProps={{ endAdornment: <InputAdornment position='end'>%</InputAdornment> }} /> della popolazione
            con <TextField value={doses} onChange={e => setDoses(+e.target.value)} size='small' inputProps={{ type: 'number', min: 1, max: 2, step: 1 }} /> dosi a testa.
          </Grid>
          <Grid item className='mainText'>
            Al ritmo di <em>{fmtInt(avgAdministrationsLastDays)}</em> somministrazioni al giorno tenuto negli ultimi <TextField value={lastDays} onChange={e => setLastDays(+e.target.value)} size='small' inputProps={{ type: 'number', min: 1, max: administrationsPerDay.length, step: 1 }} /> giorni,
            mancano <em>{Math.floor(remainingDays / 365)} anni, {Math.floor((remainingDays % 365) / 30)} mesi e {Math.floor(remainingDays % 12)} giorni</em> prima di raggiungere <em>l'immunità di gregge</em>.
          </Grid>
          <Grid item className='mainText'>
            Per ottenerla entro <Select value={targetMonth} onChange={e => setTargetMonth(+e.target.value)}>{timeItIT.months.map((m, i) => <MenuItem key={i} value={i}>{m.toLocaleLowerCase()}</MenuItem>)}</Select> <TextField value={targetYear} onChange={e => setTargetYear(+e.target.value)} size='small' inputProps={{ type: 'number', min: (new Date()).getFullYear(), max: (new Date()).getFullYear() + 10, step: 1 }} /> bisognerebbe somministrare una media di <em>{fmtInt(targetAvgAdministrationsPerDay)}</em> dosi al giorno.
          </Grid>
          {
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
          }
          <Grid item className='footerText'>
            Un progetto a cura dell'<a href='https://ondata.it' target='_blank' rel='noreferrer'>Associazione onData</a>
          </Grid>
          <Box className='Flower lt' />
          <Box className='Flower lb' />
          <Box className='Cube rt icon'>
            <Help color='primary' onClick={handleOpenDialog} />
          </Box>
          <Box className='Flower rb' />
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
            "Vaccini per tutti" è un'applicazione sperimentale che permette di stimare i tempi di avanzamento della campagna di vaccinazione in Italia sulla base degli open data ufficiali del <a href='https://github.com/italia/covid19-opendata-vaccini/' target='_blank' rel='noreferrer'>Commissario straordinario per l'emergenza Covid-19 - Presidenza del Consiglio dei Ministri</a>, dell'<a href='https://www.epicentro.iss.it/vaccini/covid-19-piano-vaccinazione' target='_blank' rel='noreferrer'>Istituto Superiore di Sanità</a> e di <a href='http://demo.istat.it/popres/index.php?anno=2020&lingua=ita' target='_blank' rel='noreferrer'>ISTAT</a>.
          </DialogContentText>
          <DialogContentText>
            L'applicazione è sviluppata e mantenuta da <a href='https://github.com/jenkin' target='_blank' rel='noreferrer'>@jenkin</a> per <a href='https://ondata.it/' target='_blank' rel='noreferrer'>onData APS</a>, associazione di promozione sociale che promuove l'apertura dei dati pubblici per renderli accessibili a tutte e tutti.
          </DialogContentText>
          <DialogContentText>
            Il codice sorgente è open source e rilasciato sotto licenza MIT su Github: <a href='https://github.com/ondata/vaccinipertutti' target='_blank' rel='noreferrer'>ondata/vaccinipertutti</a>. Questa pagina è ospitata dal servizio <a href='https://pages.github.com/' target='_blank' rel='noreferrer'>Github Pages</a> e fa esclusivamente uso di cookie tecnici: non traccia né profila in alcun modo gli utenti. Se vuoi fare una segnalazione, puoi <a href='https://github.com/ondata/vaccinipertutti/issues' target='_blank' rel='noreferrer'>aprire una issue</a>.
          </DialogContentText>
          <DialogContentText>
            Puoi sostenere l'attività di onData in molti modi, <a href='https://sostieni.ondata.it/' target='_blank' rel='noreferrer'>dai un'occhiata</a>!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='secondary' autoFocus>
            Ho capito, grazie!
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default App
