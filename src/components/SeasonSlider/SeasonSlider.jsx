import React from "react";
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
  language
}) {

	let currAndNextImages = chapters.slice(
		currentChapter,
		currentChapter + 2
	);

  if (isBack) {
    currAndNextImages = chapters.slice(currentChapter - 1, currentChapter + 1).reverse();
  }

	function renderImage({ image }) {
		const imageSrc =
			process.env.PUBLIC_URL + `/assets/background/${image}.svg`;

    const imgClasses = isAnimation
      ? `${classes.planet} ${classes.animatedPlanet}`
      : classes.planet;

    return <img className={imgClasses} src={imageSrc} alt="Logo" />;
  }

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
      </div>
    </div>
  );
}

export default SeasonSlider;
