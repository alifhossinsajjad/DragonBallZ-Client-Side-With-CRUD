import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import { ToastBar, Toaster } from "react-hot-toast";
const RootLayout = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
        
      </div>
      <Toaster/>
    </div>
  );
};

export default RootLayout;
