import React from "react";
export const Signup = () => {
  return (
    <div className="grow flex items-center justify-center">
      <div className="w-1/2 mb-32">
        <h3 className="text-lg font-medium text-center py-3 mb-8">Signup </h3>
        <h5 className="text-2xl font-normal text-start py-3">
          Welcome to Airbnb
        </h5>
        <form className="flex flex-col">
          <input type="text" placeholder="Name" className="form__inputs" />
          <input type="email" placeholder="Email" className="form__inputs" />
          <input
            type="password"
            placeholder="Password"
            className="form__inputs"
          />
          <small className="text-xs mb-3 font-thin">
            We’ll call or text you to confirm your number. Standard message and
            data rates apply. Privacy Policy
          </small>
          <button className="bg-primary rounded-lg py-2 text-white hover:bg-primaryDark">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
