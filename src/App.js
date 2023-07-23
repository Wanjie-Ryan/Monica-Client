import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from '../src/Pages/home/home' 
import ContactComponent from '../src/Pages/contact/contact'
import GalleryComponent from '../src/Pages/gallery/gallery'
import AnnouncementComponent from '../src/Pages/announcement/ann'
import GeneralEventsComponent from '../src/Pages/Events/General-Events/GE'
import SingleGEComponent from '../src/Pages/Events/General-Events/Single-GE'
import KidsEventsComponent from '../src/Pages/Events/Kids-Events/kidsEvents'
import SingleKidsComponent from '../src/Pages/Events/Kids-Events/SingleKids'




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
          <Route path ='/general-events/:id' element ={<SingleGEComponent/>}/>
          <Route path ='/kids-events' element ={<KidsEventsComponent/>}/>
          <Route path ='kids-events/:id' element ={<SingleKidsComponent/>}/>
          



        </Routes>
      </BrowserRouter>

     

    
    
    </>

  )
}

export default App