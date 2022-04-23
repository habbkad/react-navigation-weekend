import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Pages/Homepage";
import NavBar from "./Components/NavBar";
import Navigator from "./Navigation/Navigator";
function App() {
  return (
    <div className="App">
      <Navigator />
    </div>
  );
}

export default App;
