import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register/index";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import { Users } from "../pages/Users";
import { BusForm } from "../pages/Bus/BusForm";
import { Bus } from "../pages/Bus";
import { BusRoute } from "../pages/BusRoute";
import { BusRouteForm } from "../pages/BusRoute/BusRouteForm";
import { BusStation } from "../pages/BusStation";
import { BusStationForm } from "../pages/BusStation/BusStationForm";
import { UserForm } from "../pages/Users/UserForm";

export const Routers = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/inicio" element={<Home />} />
    <Route path="/usuarios" element={<Users />} />
    <Route path="/usuarios/formulario" element={<UserForm />} />
    <Route path="/autobuses" element={<Bus />} />
    <Route path="/autobuses/formulario" element={<BusForm />} />
    <Route path="/rutas" element={<BusRoute />} />
    <Route path="/rutas/formulario" element={<BusRouteForm />} />
    <Route path="/paradas" element={<BusStation />} />
    <Route path="/paradas/formulario" element={<BusStationForm />} />
  </Routes>
);
