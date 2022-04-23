import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/home";
import Login from "../page/login";
import Register from "../page/register";
import History from "../page/history";
import Order from "../page/order";

function Layout() {
  return (
    <Routes>
      <Route path="/home" key={"home"} element={<Home />} />
      <Route path="/login" key={"login"} element={<Login />} />
      <Route path="/register" key={"register"} element={<Register />} />
      <Route path="/history" key={"history"} element={<History />} />
      <Route path="/order" key={"order"} element={<Order />} />
    </Routes>
  );
}

export default Layout;
