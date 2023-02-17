import React from "react";
export const Signup = () => {
  return (
    <div className="h-full">
      <h3>Signup </h3>
      <form className="flex flex-col">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
};
