import React from "react";
import classes from "./Image.module.css";
import Characters from "../Characters/Characters";

function Image(props) {
  return (
    <div>
      <Characters speechBubbles={props.speechBubbles} isMother={props.isMother} isMari={props.isMari} />
      <img
        className={classes.image}
        src={
          process.env.PUBLIC_URL + `/assets/background/${props.imageName}.svg`
        }
        alt="Logo"
      />
    </div>
  );
}

export default Image;
