import React from "react";
import cl from "./Error.module.css";
import Back from "../Back/Back";

const Error = () => {
  return (
    <div className={cl.error}>
      <h1>Woops!</h1>
      <div>
        <p>Something went wrong</p>
        <Back />
      </div>
    </div>
  );
};

export default Error;
