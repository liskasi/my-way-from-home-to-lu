import React from "react";
import classes from "./Characters.module.css";

function Characters(props) {
  return (
    <div className={classes.root}>
      {(props.isMother || props.isMari) && (
        <img
          className={`${classes.character} ${classes.anotherCharacter}`}
          src={
            process.env.PUBLIC_URL +
            `/assets/characters/${
              props.isMother ? "mother" : props.isMari ? "mari" : ""
            }.svg`
          }
          alt="Logo"
        />
      )}
      <div>
        <div className={`${classes.bubble} `}>
            <p className={classes.text}>{props.speechBubbles?.bubble?.me}</p>
        </div>
        <div className={`${classes.bubbleSpeech} ${classes.bubbleBottomLeft}`}>
          {props.speechBubbles?.bubble?.me}
        </div>
      </div>
      <img
        className={classes.character}
        src={process.env.PUBLIC_URL + `/assets/characters/me.svg`}
        alt="Logo"
      />
    </div>
  );
}

export default Characters;
