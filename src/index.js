import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Catalogue from "./routes/Catalogue";
import Product from "./routes/Product";
import { Layout } from "./Layout";
import View1 from "./routes/View1";
import View2 from "./routes/View2";
import View3 from "./routes/View3";
import Codecard from "./routes/Codecard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Product" element={<Product />} />
        <Route path="Product/:viewid" element={<Product />} />
        <Route path="Catalogue" element={<Catalogue />} />
        <Route path="View1" element={<View1 />} />
        <Route path="View2" element={<View2 />} />
        <Route path="View3" element={<View3 />} />
        <Route path="Codecard" element={<Codecard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
