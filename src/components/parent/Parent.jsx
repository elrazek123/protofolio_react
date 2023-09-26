import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import Add from '../add/Add'

export default function Parent() {
  return (
    <>
    <Nav></Nav>
    <Outlet></Outlet>
    <Add></Add>
    <Footer></Footer>


    </>
   
  )
}
