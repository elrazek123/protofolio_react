import React from 'react'
import Nav from './components/nav/Nav'
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Parent from './components/parent/Parent';
import Contact from './components/contact/Contact';
import Portofolio from './components/portofolio/Portofolio';
import About from './components/about/About';
import Notfound from './components/notfoundpage/Notfound';
import Section from './components/section/Section.jsx';
export default function App() {
 let routes=createHashRouter(
  [
    {path:"",element:<Parent></Parent>,children:
     [
      {path:"/",element:<Section></Section>},
      {path:"contact",element:<Contact></Contact>},
      {path:"portofolio",element:<Portofolio></Portofolio>},
      {path:"about",element:<About></About>}
     ]  
  }

  ,
  {path:"/home",element:<Parent></Parent>,children:
  [
   {path:"",element:<Section></Section>},
   {path:"contact",element:<Contact></Contact>},
   {path:"portofolio",element:<Portofolio></Portofolio>},
   {path:"about",element:<About></About>}
  ]}
  ,
  {path:"*",element:<Notfound></Notfound>}
  ]
 )
   
  return (
   <RouterProvider router={routes}></RouterProvider>
  )
}
