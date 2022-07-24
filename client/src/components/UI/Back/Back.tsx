import React from "react";
import { Link } from "react-router-dom";
import cl from "./Back.module.css";

const Back = () => {
  return (
    <span className={cl.back}>
      <Link to="/news">
        <p>Back to the news</p>
      </Link>
    </span>
  );
};

export default Back;
