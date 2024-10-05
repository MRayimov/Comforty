import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={Hero} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
