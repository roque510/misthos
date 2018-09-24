import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import React from "react";
import Login from "../components/Login/Login"; 


const indexRoutes = [
  {
    path: "/Login",
    sidebarName: "Login",
    navbarName: "Login",
    icon: Dashboard,
    component: Login
  },
  { path: "/", component: Dashboard }
  ];

export default indexRoutes;
