import React, {useEffect} from "react";
import classes from "./SeasonSlider.module.css";
import Characters from "../Characters/Characters";

function SeasonSlider({
  chapters,
  currentChapter,
  isMother,
  isMari,
  speechBubbles,
  isAnimation,
  isBack,
  language,
  clock
}) {
  let currAndNextImages = chapters.slice(currentChapter, currentChapter + 2);

  if (isBack) {
    currAndNextImages = chapters
      .slice(currentChapter - 1, currentChapter + 1)
      .reverse();
  }

  function renderImage({ image }) {
    const imageSrc = process.env.PUBLIC_URL + `/assets/background/${image}.svg`;

    const imgClasses = isAnimation
      ? `${classes.planet} ${classes.animatedPlanet}`
      : classes.planet;

    return <img className={imgClasses} src={imageSrc} alt="Logo" />;
  }

  useEffect(() => {
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");

    if (hr) hr.style.transform = `rotateZ(360deg)`;
    if (mn) mn.style.transform = `rotateZ(360deg)`;
  }, [isAnimation]);

  useEffect(() => {
    const deg = 6;
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");

    let hh = clock.hours * 30;
    let mm = clock.minutes * deg;

    if (hr) hr.style.transform = `rotateZ(${(hh + mm / 12)}deg)`;
    if (mn) mn.style.transform = `rotateZ(${mm}deg)`;
  }, [clock.hours, clock.minutes]);


  return (
    <div>
      <Characters
        currentChapter={currentChapter}
        speechBubbles={speechBubbles}
        isMother={isMother}
        isMari={isMari}
        language={language}
      />
      <div className={`${classes.planetsWrapper}`}>
        {currAndNextImages.map(renderImage)}
        <div className={classes.hour}>
          <div className={classes.hr} id="hr"></div>
        </div>
        <div className={classes.min}>
          <div className={classes.mn} id="mn"></div>
        </div>
      </div>
    </div>
  );
}

export default SeasonSlider;
