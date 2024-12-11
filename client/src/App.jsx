import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { Navber } from './shared/Navber'
import { Product } from './pages/Product'

export default function App() {
  return (
    <BrowserRouter>
    <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/all-products' element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}
