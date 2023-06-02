import React, { useState } from "react";
import classes from "./Main.module.css";
import Image from "../Image/Image";
import Navigation from "../Navigation/Navigation";

const chapters = [
  {
    title: {
      ru: "Введение",
      en: "Introduction",
    },
    image: "autumnVyborg",
    speechBubbles: {
      //update
      bubble: {
        me: "Hey there! I'm Lisa, a 20-year-old from Vyborg, Russia. During my school years, I was all over the place trying out different things. I did gymnastics, attended music school where I successfully completed piano classes, played tennis, and took drawing and filmmaking classes—you name it! Additionally to school which I finished with distinction and honours, I studied English, Physics, and Informatics. With such a wide range of experiences, I ended up choosing to continue my journey in the field of ITC. I found it super exciting, especially because I had an amazing teacher who made our classes fascinating and taught me a ton.",
      },
    },
  },
  {
    title: {
      ru: "Вдохновение",
      en: "Inspiration",
    },
    image: "autumnVyborg",
    month: "october",
    attributes: {
      mari: true,
    },
    speechBubbles: {
      bubble: {
        mari: "bla",
      },
    },
  },
  {
    title: {
      en: "Deciding",
      ru: "Принятие решения",
    },
    image: "winterVyborg",
    month: "december",
    attributes: {
      mother: true,
      unis: true,
    },
    speechBubbles: {
      bubble: {
        me: [
          "So, I decided to tell my mom about Mariia's story, and it turned out she got really inspired too.",
          "Excited by the idea, we started checking out universities in the Baltic countries and ended up with four choices: LU, RTU, and two universities in Kaunas, Lithuania. We were really drawn to these options because they had great locations, affordable prices, and interesting subjects, they also presented a wide range of opportunities.",
        ],
        mother:
          "Honestly, I had thought about sending my kids (Lisa and her brother) to study abroad before, but I never really considered the Baltic states as an option. Among our friends, Finland and Germany seemed to be the top choices for studying abroad.",
      },
    },
  },
  {
    title: {
      ru: "Подготовка",
      en: "Preparation",
    },
    image: "springVyborg",
    speechBubbles: {
      bubble: {
        me: "bla-bla",
      },
    },
  },
  {
    title: {
      ru: "IELTS",
      en: "IELTS",
    },
    image: "summerVyborg",
    month: "june",
    speechBubbles: {
      bubble: {
        me: "bla-bla",
      },
    },
  },
  {
    title: {
      ru: "Экзамены и выпускной",
      en: "Final exams & Graduation",
    },
    image: "summerVyborg",
    month: "july",
    attributes: {
      cap: true,
    },
    speechBubbles: {
      bubble: {
        me: "bla-bla",
      },
    },
  },
  {
    title: {
      ru: "Прием и поездка в Латвию",
      en: "Getting accepted & trip to Latvia",
    },
    image: "summerRiga",
    month: "august",
    attributes: {
      bus: true,
    },
    speechBubbles: {
      bubble: {
        me: "bla-bla",
      },
    },
  },
];

function Main() {
  const [currentChapter, setCurrentChapter] = useState(0);

  const switchChapter = (e) => {
    const direction = e.target.getAttribute("data-value");
    if (direction === "next") {
      setCurrentChapter(currentChapter + 1);
    } else {
      setCurrentChapter(currentChapter - 1);
    }
  };

  return (
    <div className={classes.root}>
      <Navigation
        onClick={switchChapter}
        currentChapter={currentChapter}
        title={chapters[currentChapter].title.en}
      />
      <Image
        imageName={chapters[currentChapter].image}
        speechBubbles={chapters[currentChapter].speechBubbles}
        isMother={chapters[currentChapter].attributes?.mother}
        isMari={chapters[currentChapter].attributes?.mari}
      />
    </div>
  );
}

export default Main;
