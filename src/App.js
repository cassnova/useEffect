import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Playing with useEffect and Time</h1>
        <button className="btn" onClick={() => setShow(!show)}>
          {show ? "Hide Time" : "Show Time"}
        </button>
        <div className="date-container">
          {show ? <p className="date">{date.toLocaleTimeString()}</p> : null}
        </div>
      </header>
    </div>
  );
}

export default App;
