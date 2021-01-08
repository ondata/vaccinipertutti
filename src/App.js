import { useEffect, useState } from 'react'
import { rollups, sum, descending } from 'd3-array'
import './App.css'

function App () {
  const [data, setData] = useState([])
  const [lastDays, setLastDays] = useState(7)
  const [lastDate, setLastDate] = useState(new Date())
  const [population, setPopulation] = useState(6e7)
  const [populationFraction, setPopulationFraction] = useState(0.8)
  const [administrationsPerDay, setAdministrationsPerDay] = useState([])
  const [avgAdministrationsLastDays, setAvgAdministrationsLastDays] = useState([])
  const [administrations, setAdministrations] = useState(0)
  const [remainingDays, setRemainingDays] = useState(0)

  useEffect(() => {
    window.fetch('./somministrazioni-vaccini-summary-latest.json')
      .then(res => res.json())
      .then(res => res.data)
      .then(data => data.filter(d => d.area !== 'ITA'))
      .then(data => data.sort((a, b) => descending(a.data_somministrazione, b.data_somministrazione)))
      .then(data => { setData(data) })
  }, [])

  useEffect(() => {
    setAdministrationsPerDay(rollups(data, v => sum(v, d => d.totale), d => d.data_somministrazione))
    setAdministrations(sum(data, d => d.totale))
  }, [data])

  useEffect(() => {
    setAvgAdministrationsLastDays(sum(administrationsPerDay.slice(0, lastDays), d => d[1]) / lastDays)
  }, [administrationsPerDay, lastDays])

  useEffect(() => {
    const days = (population * populationFraction - administrations) / avgAdministrationsLastDays
    const datetime = new Date()
    datetime.setDate(datetime.getDate() + Math.round(days))
    setRemainingDays(days)
    setLastDate(datetime)
  }, [population, populationFraction, administrations, avgAdministrationsLastDays])

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Administrations: {administrations}</p>
        <p>Average administrations per day: {Math.round(avgAdministrationsLastDays)} (last {lastDays}-days window)</p>
        <p>Remaining days: {Math.round(remainingDays)}</p>
        <p>Last day: {lastDate.toString()}</p>
      </header>
    </div>
  )
}

export default App
