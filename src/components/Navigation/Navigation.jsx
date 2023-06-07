import React from "react";
import classes from "./Navigation.module.css";

function Navigation(props) {
  return (
    <div className={classes.root}>
      <div className={classes.back}>
        <button
          onClick={props.onClick}
          data-value="back"
          disabled={props.currentChapter > 0 ? false : true}
        >
          back
        </button>
      </div>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.next}>
        <button
          onClick={props.onClick}
          data-value="next"
          disabled={props.currentChapter < 6 ? false : true}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Navigation;
