import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import ChakaraForm from "./components/ChakaraForm";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div
            style={{ width: "100%", backgroundColor: "white", color: "black" }}
          >
            <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
              <ChakaraForm />
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
    </ChakraProvider>
  );
}

export default App;
