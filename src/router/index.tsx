import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register/index";
import Home from "../pages/Home";
import { Accident } from "../pages/Accident";
import { Login } from "../pages/Login";
import { Learn } from "../pages/Learn";

export const Routers = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/inicio" element={<Home />} />
    <Route path="/accidente" element={<Accident />} />
    <Route path="/aprender" element={<Learn />} />
  </Routes>
);
