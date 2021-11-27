import React, { ReactElement } from "react";
import { Login } from "./pages/Login";
import { Books } from "./pages/Books";
import { About } from "./pages/About";
import { useAppSelector } from "./app/hooks";

import { BrowserRouter, Routes as ReactRouterRoutes, Route, RouteProps, Navigate } from "react-router-dom";

type Props = {
  children: ReactElement;
} & RouteProps;

function PrivateRoute({ children }: Props) {
  const { token } = useAppSelector((state) => state.user.value);
  return token ? children : <Navigate to="/" />;
}

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/*" element={<Login />} />
        <Route path="/books" element={
          <PrivateRoute>
            <Books />
          </PrivateRoute>}
        />
        <Route path="/about" element={
          <PrivateRoute>
            <About />
          </PrivateRoute>}
        />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
}