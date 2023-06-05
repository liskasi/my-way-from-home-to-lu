import React, { useState, useEffect } from "react";
import classes from "./SpeechBubbles.module.css";

function SpeechBubbles(props) {
  const [currentBubbleOrder, setCurrentBubbleOrder] = useState(0);
  const [currentBubbleText, setCurrentBubbleText] = useState("");

  useEffect(() => {
    setCurrentBubbleOrder(0);
    setCurrentBubbleText("")
  }, [props.currentChapter]);

  if (currentBubbleText !== props.speechBubbles[currentBubbleOrder]?.text)
    setCurrentBubbleText(props.speechBubbles[currentBubbleOrder]?.text);

  useEffect(() => {
    if (currentBubbleOrder + 1 < props.speechBubbles.length) {
      const timer = setTimeout(() => {
        setCurrentBubbleOrder(currentBubbleOrder + 1);
      }, props.speechBubbles[currentBubbleOrder].timeout);
      return () => clearTimeout(timer);
    }
  }, [currentBubbleOrder, props.speechBubbles, props.speechBubbles.length]);

  return (
    <div className={classes.root}>
      {props.speechBubbles.length === 1 && (
        <div>
          <div className={`${classes.bubble} `}>
            <p className={classes.text}>{props.speechBubbles[0]?.text}</p>
          </div>
          <div
            className={`${classes.bubbleSpeech} ${classes.bubbleBottomRight}`}
          >
            {props.speechBubbles[0]?.text}
          </div>
        </div>
      )}
      {props.speechBubbles.length > 1 && (
        <div>
          <div className={`${classes.bubble} `}>
            <p className={classes.text}>{currentBubbleText}</p>
          </div>
          <div
            className={`${classes.bubbleSpeech} ${props.speechBubbles[currentBubbleOrder].owner === "me" ? classes.bubbleBottomRight : classes.bubbleBottomLeft}`}
          >
            {currentBubbleText}
          </div>
        </div>
      )}
    </div>
  );
}

export default SpeechBubbles;
