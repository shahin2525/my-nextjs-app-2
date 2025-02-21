import Navbar from "@/components/Nabvar";
import React from "react";

const CommonLayout2 = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default CommonLayout2;
