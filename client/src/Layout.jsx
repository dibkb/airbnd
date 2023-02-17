import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
const Layout = () => {
  return (
    <div className="px-4 flex flex-col min-h-screen mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
