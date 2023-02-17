import React from "react";
import { Brad } from "./Brand";
import { InnerNav } from "./InnerNav";
import { Rightpart } from "./Rightpart";
const Header = () => {
  return (
    <div className="py-3 flex items-center justify-between">
      <Brad />
      <InnerNav />
      <Rightpart />
    </div>
  );
};

export default Header;
