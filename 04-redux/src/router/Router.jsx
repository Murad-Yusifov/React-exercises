import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Basket from '../pages/Basket'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router