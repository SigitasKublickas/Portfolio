import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";

type Props = {};

const AllRoutes = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
