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
import EventVenue from "./views/pages/EventVenue";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/program" element={<Program />} />
      <Route path="/venue" element={<EventVenue />} />
      <Route path="/speaker" element={<Speaker />} />
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/organizerandpartners" element={<OrganizerAndPartners />} />
    </Routes>
  );
}

export default App;

// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./views/pages/Home";
// import About from "./views/pages/AboutCon";
// import Program from "./views/pages/Program";
// import Speaker from "./views/pages/Speaker";
// import Announcement from "./views/pages/Announcement";
// import Tour from "./views/pages/Tour";
// import OrganizerAndPartners from "./views/pages/OrganizerAndPartners";

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <Routes>
//       <Route path="/rizalconference2026/" element={<Home />} />
//       <Route path="/rizalconference2026/About" element={<About />} />
//       <Route path="/rizalconference2026/program" element={<Program />} />
//       <Route path="/rizalconference2026/speaker" element={<Speaker />} />
//       <Route
//         path="/rizalconference2026/announcement"
//         element={<Announcement />}
//       />
//       <Route path="/rizalconference2026/tour" element={<Tour />} />
//       <Route
//         path="/rizalconference2026/organizerandpartners"
//         element={<OrganizerAndPartners />}
//       />
//     </Routes>
//   );
// }

// export default App;
// "predeploy": "npm run build",
// "deploy": "gh-pages -d dist"
