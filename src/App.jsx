import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/pages/Home";
import About from "./views/pages/AboutCon";
import Program from "./views/pages/Program";
import Speaker from "./views/pages/Speaker";
import Announcement from "./views/pages/Announcement";
import Tour from "./views/pages/Tour";
import OrganizerAndPartners from "./views/pages/OrganizerAndPartners";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/program" element={<Program />} />
      <Route path="/speaker" element={<Speaker />} />
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/organizerandpartners" element={<OrganizerAndPartners />} />
    </Routes>
  );
}

export default App;
