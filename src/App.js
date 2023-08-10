import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "../src/Pages/home/home";
import ContactComponent from "../src/Pages/contact/contact";
import GalleryComponent from "../src/Pages/gallery/gallery";
import AnnouncementComponent from "../src/Pages/announcement/ann";
import GeneralEventsComponent from "../src/Pages/Events/General-Events/GE";
import SingleGEComponent from "../src/Pages/Events/General-Events/Single-GE";
import KamaComponents from "../src/Pages/Ministries/kama/kama";
import MuComponents from "../src/Pages/Ministries/Mu/mu";
import YouthComponents from "../src/Pages/Ministries/Kayo/youth";
import BrigadeComponents from "../src/Pages/Ministries/Brigade/brigade";
import TeamComponent from "../src/Pages/Team/Team";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/gallery" element={<GalleryComponent />} />
          <Route path="/announce" element={<AnnouncementComponent />} />
          <Route path="/general-events" element={<GeneralEventsComponent />} />
          <Route path="/general-events/:id" element={<SingleGEComponent />} />
          <Route path="/kama" element={<KamaComponents />} />
          <Route path="/mothers-union" element={<MuComponents />} />
          <Route path="/kayo" element={<YouthComponents />} />
          <Route path="/brigade" element={<BrigadeComponents />} />
          <Route path="/team" element={<TeamComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
