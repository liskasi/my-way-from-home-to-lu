import React from "react";
import classes from "./Characters.module.css";
import SpeechBubbles from "../SpeechBubbles/SpeechBubbles";

function Characters({currentChapter, speechBubbles, isMother, isMari, language}) {
  return (
    <div className={classes.root}>
      <SpeechBubbles currentChapter={currentChapter} speechBubbles={speechBubbles} language={language} />
      {/* <div>
        <div className={`${classes.bubble} `}>
          <p className={classes.text}>{speechBubbles?.bubble?.me}</p>
        </div>
        <div className={`${classes.bubbleSpeech} ${classes.bubbleBottomLeft}`}>
          {speechBubbles?.bubble?.me}
        </div>
      </div> */}

      {(isMother || isMari) && (
        <img
          className={`${classes.character} ${classes.anotherCharacter}`}
          src={
            process.env.PUBLIC_URL +
            `/assets/characters/${
              isMother ? "mother" : isMari ? "mari" : ""
            }.svg`
          }
          alt="Logo"
        />
      )}

      <img
        className={classes.character}
        src={process.env.PUBLIC_URL + `/assets/characters/me.svg`}
        alt="Logo"
      />
    </div>
  );
}

export default Characters;
