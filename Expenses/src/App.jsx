import { useState } from 'react'
import Navbar from './components/navbar'
import './App.css'
import Dashboard from './pages/dashboard'
import Transaction from './pages/transactions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Transaction/>

    </>
  )
}

export default App
