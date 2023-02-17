import React from "react";
import { GlobeAltIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { UserModal } from "./UserModal";
export const Rightpart = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div
      className="flex items-center select-none relative z-10"
      onClick={() => {
        setShowModal((val) => !val);
      }}
    >
      <span className="text-sm font-medium cursor-pointer py-2 px-3 rounded-full hover:bg-gray-50">
        Airbnd your home
      </span>
      <button className="py-2 px-3 rounded-full hover:bg-gray-50">
        <GlobeAltIcon className="w-5 h-5" />
      </button>
      <button className="flex gap-2 items-center border border-gray-300 py-2 px-3 rounded-full hover:bg-gray-100">
        <Bars3Icon className="w-6 h-6" />
        <UserCircleIcon className="w-6 h-6 text-gray-600" />
      </button>
      {showModal && <UserModal />}
    </div>
  );
};
