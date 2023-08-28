import { Route, Routes } from "react-router-dom";
import"bootstrap"
import "./App.css";
import Navbar from "./components/Navber";
// import { Women,Men } from "./components/pages";
import { Women } from "./components/pages/Women";
import { Men } from "./components/pages/Men";
import { CardViewer } from "./components/pages/cardViewer";
import Home from "./components/pages/Home";


function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={< Men />} />
        <Route path="/women" element={< Women />} />
        <Route path="/cardviewer" element={< CardViewer />} />
      </Routes>
    </div>
  );
}

export default App;
