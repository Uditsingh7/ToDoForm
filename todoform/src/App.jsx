import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainTodo from './components/MainTodo'
import Table from './components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainTodo />}></Route>
          <Route path='/table' element={<Table />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
