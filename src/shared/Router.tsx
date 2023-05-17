import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import IntroPage from "../pages/IntroPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
