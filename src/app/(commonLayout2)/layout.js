import Navbar from "@/components/Nabvar";
import React from "react";

const CommonLayout2 = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <footer className="text-center bg-gray-600 h-16">
        This is fokira Footer{" "}
      </footer>
    </div>
  );
};

export default CommonLayout2;
