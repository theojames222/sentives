import React from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
