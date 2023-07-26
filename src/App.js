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
import Teens from '../src/Pages/Events/Teens-Events/Teens'
import SingleTeenComponent from '../src/Pages/Events/Teens-Events/SingleTeen'
import YouthComponent from '../src/Pages/Events/Youth-Events/Youth'
import SingleYouthComponent from '../src/Pages/Events/Youth-Events/SingleYouth'
import MenComponent from '../src/Pages/Events/Men-Events/Men'
import SingleMenComponent from '../src/Pages/Events/Men-Events/singleMen'
import LadiesComponent from '../src/Pages/Events/Ladies-Events/Ladies'
import SingleLadiesComponent from '../src/Pages/Events/Ladies-Events/SingleLadies'
import KamaComponents from '../src/Pages/Ministries/kama/kama'
import MuComponents from '../src/Pages/Ministries/Mu/mu'
import YouthComponents from '../src/Pages/Ministries/Kayo/youth'




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
          <Route path ='/kids-events/:id' element ={<SingleKidsComponent/>}/>
          <Route path ='/teen-events' element ={<Teens/>}/>
          <Route path ='/teen-events/:id' element ={<SingleTeenComponent/>}/>
          <Route path ='/youth-events' element ={<YouthComponent/>}/>
          <Route path ='/youth-events/:id' element ={<SingleYouthComponent/>}/>
          <Route path ='/men-events' element ={<MenComponent/>}/>
          <Route path ='/men-events/:id' element ={<SingleMenComponent/>}/>
          <Route path ='/ladies-events' element ={<LadiesComponent/>}/>
          <Route path ='/ladies-events/:id' element ={< SingleLadiesComponent/>}/>
          <Route path ='/kama' element ={<KamaComponents/>}/>
          <Route path ='/mothers-union' element ={<MuComponents/>}/>
          <Route path ='/kayo' element ={<YouthComponents/>}/>


          



        </Routes>
      </BrowserRouter>

     

    
    
    </>

  )
}

export default App