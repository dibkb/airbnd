import React from "react";

import { Logo } from "../Icons";
export const Brad = () => {
  return (
    <span className="flex items-center">
      <Logo />
      <small className="text-xl font-semibold text-primary select-none cursor-pointer">
        airbnd
      </small>
    </span>
  );
};
