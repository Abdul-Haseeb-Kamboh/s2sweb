import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/ContactUs";
import Navbar from "./Components/Navbar";
import TwoWay from "./Components/Twoway";
import Alphabetspage from "./Pages/Alphabetspage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/TwoWay" element={<TwoWay />} />
        <Route path="/Alphabetspage" element={<Alphabetspage />} />
      </Routes>
    </Router>
  );
};

export default App;
