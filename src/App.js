import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PruebaRapida from "./pages/PruebaRapida";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/prueba-rapida" element={<PruebaRapida />} />
      </Routes>
    </Layout>
  );
}

export default App;
