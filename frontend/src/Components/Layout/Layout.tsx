import React from "react";
import Navbar from "../Navbar/Navbar";
import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import Home from "../../Pages/Home/Home";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className="layout flex flex-col center">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
