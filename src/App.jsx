import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import detailPage from './pages/detailPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage} />
            <Route path='/aboutus' Component={AboutUs} />
            <Route path='/products' Component={Products} />
            <Route path='/products/:id' Component={detailPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
