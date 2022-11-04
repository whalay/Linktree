import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
  <Fragment>
      <Router>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Router>
    <Footer />
  </Fragment>
  );
}

export default App;
