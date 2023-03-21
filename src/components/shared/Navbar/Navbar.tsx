import React from "react";
import css from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={css.container}>
        <div>ICON</div>
        <div className={css.navContainer}>
          <span>About</span>
          <span>Services</span>
          <span>Contact us</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
