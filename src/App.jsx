import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from "./layouts/DefaultLayout"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
