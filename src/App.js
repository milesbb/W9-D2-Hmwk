import logo from "./logo.svg";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
