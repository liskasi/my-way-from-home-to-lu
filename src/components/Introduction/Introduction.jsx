import React from "react";
import classes from "./Introduction.module.css";
// import logo from '${process.env.PUBLIC_URL}/assets/castle-intro.svg';

function Introduction() {
  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={`${process.env.PUBLIC_URL}/assets/castle-intro.svg`}
        alt="Logo"
      />
    </div>
  );
}

export default Introduction;
