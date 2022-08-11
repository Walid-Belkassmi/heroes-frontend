import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Heroe from "./Pages/Heroe";
import Power from "./Pages/Power";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Heroe />} />
        <Route path="/:slug/power" element={<Power />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
