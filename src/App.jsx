import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import CountryDetails from './components/CountryDetails'

function App() {
  

  return (
    <>
   <Header/>
   <Routes>
    <Route path='/countryDetails' element={<CountryDetails />} />
   </Routes>
   <Home/>

    </>
  )
}

export default App
