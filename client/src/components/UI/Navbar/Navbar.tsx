import React, { FC } from "react";
import { Link } from "react-router-dom";
import cl from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <div className={cl.navbar}>
      <div className={cl.navbar__links}>
        <Link to="/news">
          <p>News</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
