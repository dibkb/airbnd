import React from "react";
export const Login = () => {
  return (
    <div className="grow flex items-center justify-center">
      <div className="w-1/2 mb-32">
        <h3 className="text-lg font-medium text-center py-3 mb-8">Login </h3>
        <form className="flex flex-col">
          <input type="email" placeholder="Email" className="form__inputs" />
          <input
            type="password"
            placeholder="Password"
            className="form__inputs"
          />
          <button className="bg-primary rounded-lg py-2 text-white hover:bg-primaryDark">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
