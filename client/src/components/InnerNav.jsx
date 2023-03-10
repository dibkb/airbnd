import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export const InnerNav = () => {
  return (
    <div className="flex gap-3 items-center border border-gray-100 rounded-full py-3 px-3 shadow-md shadow-gray-300 text-sm font-medium cursor-pointer select-none hover:bg-gray-100">
      <span className="border-r border-gray-300 pr-3 select-none">
        Anywhere
      </span>
      <span className="border-r border-gray-300 pr-3 select-none">
        Any week
      </span>
      <small></small>
      <span className="font-thin">Add guests</span>
      <button className="bg-primary text-white p-1 rounded-full">
        <MagnifyingGlassIcon className="w-4 h-4" />
      </button>
    </div>
  );
};
