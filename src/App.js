import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Home from "./components/screens/Home";
import Products from "./components/screens/Products";

function App() {
  return (
    <Router>
      <div>
        <TopMenu />
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/Products" element={<Products/>} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
