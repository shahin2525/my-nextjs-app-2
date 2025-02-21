import Sider from "@/components/Sider";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <Sider />
      {children}
    </div>
  );
};

export default layout;
