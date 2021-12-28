import React from "react"
import './App.css';
import Header from "./Components/Header"
import Home from "./Components/Home"
import Boten from "./Components/Boten"
import Lossen from "./Components/Lossen"
import Webcams from "./Components/Webcams"
import Footer from "./Components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="boten" element={<Boten />} />
        <Route path="lossen" element={<Lossen />} />
        <Route path="webcams" element={<Webcams />} />
      </Routes>      
      <Footer />
    </Router>
  );
}

export default App;
