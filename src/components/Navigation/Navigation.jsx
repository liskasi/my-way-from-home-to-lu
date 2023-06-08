import React from "react";
import classes from "./Navigation.module.css";

function Navigation(props) {
  return (
    <div className={classes.root}>
      <div className={classes.backButton}>
        <button
          className={`${classes.arrow} ${classes.back}`}
          onClick={props.onClick}
          data-value="back"
          disabled={props.currentChapter > 0 ? false : true}
        ></button>
      </div>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.nextButton}>
        <button
          className={`${classes.arrow} ${classes.next}`}
          onClick={props.onClick}
          data-value="next"
          disabled={props.currentChapter < 6 ? false : true}
        ></button>
      </div>
    </div>
  );
}

export default Navigation;
