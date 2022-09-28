import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const PrivateRoutes = () => {
  const authenticated = false;
  return authenticated ? (
    <NavigationBar>
      <Outlet />
    </NavigationBar>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default PrivateRoutes;
