import React from "react"
import './App.css';
import Header from "./Components/Header"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>      
      <Footer />
    </Router>
  );
}

export default App;
