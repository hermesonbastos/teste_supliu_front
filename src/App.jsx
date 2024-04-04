import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Album from "./pages/Album";

function App() {
  return (
    <div className="mx-auto w-4/5 lg:w-2/4">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album/:id_album" element={<Album />} />
        </Routes>
    </div>
  );
}

export default App;
