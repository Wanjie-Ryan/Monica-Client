import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from '../src/Pages/home/home' 
import ContactComponent from '../src/Pages/contact/contact'


function App() {


  return (

    <>

      <BrowserRouter>

        <Routes>

          <Route path= '/' element ={<HomeComponent/>}/>
          <Route path  ='/contact' element ={<ContactComponent/>}/>


        </Routes>
      </BrowserRouter>

     

    
    
    </>

  )
}

export default App