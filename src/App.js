import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from '../src/Pages/home/home' 
import ContactComponent from '../src/Pages/contact/contact'
import GalleryComponent from '../src/Pages/gallery/gallery'
import AnnouncementComponent from '../src/Pages/announcement/ann'
import GeneralEventsComponent from '../src/Pages/Events/General-Events/GE'

function App() {


  return (

    <>

      <BrowserRouter>

        <Routes>

          <Route path= '/' element ={<HomeComponent/>}/>
          <Route path  ='/contact' element ={<ContactComponent/>}/>
          <Route path ='/gallery' element ={< GalleryComponent/>}/>
          <Route path ='/announce' element ={<  AnnouncementComponent/>}/>
          <Route path ='/general-events' element ={<GeneralEventsComponent/>}/>
          



        </Routes>
      </BrowserRouter>

     

    
    
    </>

  )
}

export default App