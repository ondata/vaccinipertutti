import { useEffect, useState } from 'react'
import { rollups, sum, descending } from 'd3-array'
import { formatLocale } from 'd3-format'
import { timeFormatLocale } from 'd3-time-format'
import numberItIT from 'd3-format/locale/it-IT.json'
import timeItIT from 'd3-time-format/locale/it-IT.json'

import './App.css'

function App () {
  const numberLoc = formatLocale(numberItIT)
  const fmtInt = numberLoc.format(',d')
  const fmtPerc = numberLoc.format('.0%')

  const timeLoc = timeFormatLocale(timeItIT)
  const fmtDate = timeLoc.format('%A %d %B %Y')
  const fmtISODate = timeLoc.format('%Y-%M-%d')

  const [data, setData] = useState([])
  const [area, setArea] = useState('ITA')
  const [lastUpdate, setLastUpdate] = useState(new Date())
  const [lastDays, setLastDays] = useState(7)
  const [lastDate, setLastDate] = useState(new Date())
  const [population, setPopulation] = useState(6e7)
  const [populationFraction, setPopulationFraction] = useState(0.8)
  const [doses, setDoses] = useState(2)
  const [administrationsPerDay, setAdministrationsPerDay] = useState([])
  const [avgAdministrationsLastDays, setAvgAdministrationsLastDays] = useState([])
  const [administrations, setAdministrations] = useState(0)
  const [remainingAdministrations, setRemainingAdministrations] = useState(0)
  const [remainingDays, setRemainingDays] = useState(0)

  useEffect(() => {
    window.fetch('./last-update-dataset.json')
      .then(data => data.json())
      .then(data => { setLastUpdate(new Date(data.ultimo_aggiornamento)) })
    window.fetch('./popolazione_residente_2020.json')
      .then(data => data.json())
      .then(data => { setPopulation(sum(data, d => d.totale)) })
    window.fetch('./somministrazioni-vaccini-summary-latest.json')
      .then(res => res.json())
      .then(res => res.data)
      .then(data => data.filter(d => d.area === 'ITA'))
      .then(data => data.sort((a, b) => descending(a.data_somministrazione, b.data_somministrazione)))
      .then(data => { setData(data) })
  }, [])

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

  return (
    <div className='App'>
      <p>Termine previsto della campagna vaccinale italiana contro <em>Sars-CoV-2</em>.</p>
      <h1>{fmtDate(lastDate)}</h1>
      <p>
        L'Italia ha iniziato a somministrare il primo vaccino approvato dall'EMA e dall'AIFA il <em>27 dicembre 2020</em>.
        A oggi, <em>{fmtDate(lastUpdate).toLowerCase()}</em>, sono state somministrate <em>{fmtInt(administrations)} dosi</em> a livello nazionale,
        ne mancano <em>{fmtInt(remainingAdministrations)}</em> prima di riuscire a vaccinare l'<em>{fmtPerc(populationFraction)}</em> della popolazione italiana
        con <em>{fmtInt(doses)} dosi</em> a testa.
        Al ritmo di <em>{fmtInt(avgAdministrationsLastDays)} dosi</em> somministrate al giorno tenuto negli ultimi <em>{fmtInt(lastDays)} giorni</em>,
        mancano <em>{Math.floor(remainingDays / 365)} anni, {Math.floor((remainingDays % 365) / 30)} mesi e {Math.floor(remainingDays % 12)} giorni</em> prima di raggiungere <em>l'immunità di gregge</em>.
      </p>
      <div className='Cube lt' />
      <div className='Cube lb' />
      <div className='Cube rt' />
      <div className='Cube rb' />
    </div>
  )
}

export default App
