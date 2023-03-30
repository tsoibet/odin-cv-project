import React from "react";
import Header from "./components/Header";
import CV from "./components/CV";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CV />
        <Footer />
      </div>
    );
  }
}
