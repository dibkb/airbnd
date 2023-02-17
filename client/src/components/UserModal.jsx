import React from "react";
import { Link } from "react-router-dom";
export const UserModal = () => {
  return (
    <div className="flex flex-col rounded-lg w-64 absolute top-12 right-0 border shadow-lg shadow-gray-100 cursor-pointer">
      <Link to="/signup">
        <span className="text-sm py-3 px-3 hover:bg-gray-100">Sign up</span>
      </Link>

      <span className="text-sm  py-3 px-3 border-b border-gray-200 hover:bg-gray-100">
        Login
      </span>
      <span className="text-sm py-3 px-3 hover:bg-gray-100">
        Airbnd your home
      </span>
      <span className="text-sm py-3 px-3 hover:bg-gray-100">
        Host an experience
      </span>
      <span className="text-sm py-3 px-3 hover:bg-gray-100">Help</span>
    </div>
  );
};
