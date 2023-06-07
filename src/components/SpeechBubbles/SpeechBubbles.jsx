import React, { useState, useEffect } from "react";
import classes from "./SpeechBubbles.module.css";

function SpeechBubbles({currentChapter, speechBubbles, language}) {
  const [currentBubbleOrder, setCurrentBubbleOrder] = useState(0);
  const [currentBubbleText, setCurrentBubbleText] = useState("");

  useEffect(() => {
    setCurrentBubbleOrder(0);
    setCurrentBubbleText("")
  }, [currentChapter]);

  if (currentBubbleText !== speechBubbles[currentBubbleOrder]?.text[language])
    setCurrentBubbleText(speechBubbles[currentBubbleOrder]?.text[language]);

  useEffect(() => {
    if (currentBubbleOrder + 1 < speechBubbles.length) {
      const timer = setTimeout(() => {
        setCurrentBubbleOrder(currentBubbleOrder + 1);
      }, speechBubbles[currentBubbleOrder].timeout);
      return () => clearTimeout(timer);
    }
  }, [currentBubbleOrder, speechBubbles, speechBubbles.length]);

  return (
    <div className={classes.root}>
      {speechBubbles.length === 1 && (
        <div>
          <div className={`${classes.bubble} `}>
            <p className={classes.text}>{speechBubbles[0]?.text[language]}</p>
          </div>
          <div
            className={`${classes.bubbleSpeech} ${classes.bubbleBottomRight}`}
          >
            {speechBubbles[0]?.text[language]}
          </div>
        </div>
      )}
      {speechBubbles.length > 1 && (
        <div>
          <div className={`${classes.bubble} `}>
            <p className={classes.text}>{currentBubbleText}</p>
          </div>
          <div
            className={`${classes.bubbleSpeech} ${speechBubbles[currentBubbleOrder].owner === "me" ? classes.bubbleBottomRight : classes.bubbleBottomLeft}`}
          >
            {currentBubbleText}
          </div>
        </div>
      )}
    </div>
  );
}

export default SpeechBubbles;
