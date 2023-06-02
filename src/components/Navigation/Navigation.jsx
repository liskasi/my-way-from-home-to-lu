import React from "react";
import classes from "./Navigation.module.css";

function Navigation(props) {
  return (
    <div className={classes.root}>
      {props.currentChapter > 0 && (
        <div onClick={props.onClick} data-value="back">
          back
        </div>
      )}
      <div>{props.title}</div>
      {props.currentChapter < 6 && (
        <div onClick={props.onClick} data-value="next">
          next
        </div>
      )}
    </div>
  );
}

export default Navigation;
