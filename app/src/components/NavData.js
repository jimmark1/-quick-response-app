import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";

export const navData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    title: "Account",
    icon: <PersonIcon />,
    path: "/account",
  },
  {
    title: "About",
    icon: <InfoIcon />,
    path: "/about",
  },
];
