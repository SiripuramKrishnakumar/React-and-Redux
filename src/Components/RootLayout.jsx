import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import ProductContextProvider from "../Store/Context/ProductsContext";

const RootLayout = () => {
  return (
    <React.Fragment>
      <ProductContextProvider>
      <NavBar />
      <br />
      <main>
      <div class="container-fluid">
        <Outlet />
      </div>
      </main>
      </ProductContextProvider>
    </React.Fragment>
    
  );
};

export default RootLayout;
