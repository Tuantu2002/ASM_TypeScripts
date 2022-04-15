/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { Outlet } from "react-router-dom";
import FooterClientLayout from "../../components/footer";
import HeaderClientLayout from "../../components/header";

const LayOutClient = () => {
  return (
    <div>
      <header>
        <HeaderClientLayout />
      </header>
      <main>
        <Outlet />
      </main>

      <footer>
        <FooterClientLayout />
      </footer>
    </div>
  );
};

export default LayOutClient;
