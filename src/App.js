import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Headerperso from "./components/navbar/headerperso";
import Footerperso from "./components/footer/footerperso";
import React from "react";
import ColorPickerMenu from "color-picker-menu";

function App() {
  return (
    <div className="App">
      <Headerperso />
      <ColorPickerMenu />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
      <Footerperso />
    </div>
  );
}

export default App;
