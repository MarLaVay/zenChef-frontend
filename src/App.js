import logo from "./logo.svg";
import "./App.css";
import TestComponent from "./components/TestComponent/TestComponent";

function App() {
  require("dotenv").config();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestComponent />
      </header>
    </div>
  );
}

export default App;
