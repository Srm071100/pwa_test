import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoColumn from "./components/columncart";
import DemoLine from "./components/linecart";
import DemoArea from "./components/areachart";
import DemoBar from "./components/barchart";
import DemoPie from "./components/piechart";
import DemoGauge from "./components/progresschart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div
          style={{ width: "100%", backgroundColor: "white", color: "black" }}
        >
          <div style={{ width: "80%", margin: "auto" }}>
            <h2>Columan Cart</h2>
            <DemoColumn />

            <h2>Line Cart</h2>
            <DemoLine />

            <h2>Area Cart</h2>
            <DemoArea />

            <h2>Bar Cart</h2>
            <DemoBar />

            <h2>Pie Cart</h2>
            <DemoPie />

            <h2>Gauge Cart</h2>
            <DemoGauge />
          </div>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
