import { useState } from 'react'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import TodoList from './Pages/TodoList'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/TodoList" element={<TodoList />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
