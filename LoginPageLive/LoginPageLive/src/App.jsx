import { useState } from 'react'
import './App.css'
import LoginPage from './Pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <LoginPage />
      </Router>
    </>
  )
}

export default App
