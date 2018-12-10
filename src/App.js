import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header header="Header title" />
        <div className="container">
          <Contact name="Arian" phone="048 332 123" email="a@h.com" />
          <Contact name="Goe" phone="048 111 111" email="g@g.com" />
        </div>
      </div>
    );
  }
}

export default App;
