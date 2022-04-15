/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import { Outlet } from "react-router-dom";
import NavAdmin from "../../components/Nav";

const LayOutAdmin = () => {
  return (
    <div>
      <div>
        <header>
          <HeaderAdmin />
          <NavAdmin />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayOutAdmin;
