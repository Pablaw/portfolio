import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import IntroPage from "../pages/IntroPage";
import PortfolioPage from "../pages/PortfolioPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
