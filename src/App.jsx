import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage} />
            <Route path='/aboutus' Component={AboutUs} />
            <Route path='/products' Component={Products} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
