import React from "react";
import { Login } from "./pages/Login";
import { Search } from "./pages/Search";

import { BrowserRouter, Routes as ReactRouterRoutes, Route, } from "react-router-dom";

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/*" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
}