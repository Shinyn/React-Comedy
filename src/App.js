import "./App.module.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Form from "./pages/Form";
import Comedians from "./pages/Comedians";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">HOME</Link>
        <Link to="/form">ADD NEW</Link>
        <Link to="/comedians">SHOW ALL</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/comedians" element={<Comedians />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
