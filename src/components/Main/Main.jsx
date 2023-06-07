import React, { useState } from "react";
import classes from "./Main.module.css";
import SeasonSlider from "../SeasonSlider/SeasonSlider";
import Navigation from "../Navigation/Navigation";

const chapters = [
  {
    title: {
      ru: "Введение",
      en: "Introduction",
    },
    image: "autumnVyborg",
    speechBubbles: [
      {
        owner: "me",
        text: {
          en: "Hey there! I'm Lisa, a 20-year-old from Vyborg, Russia. During my school years, I was all over the place trying out different things. I did gymnastics, attended music school where I successfully completed piano classes, played tennis, and took drawing and filmmaking classes—you name it! Additionally to school which I finished with distinction and honours, I studied English, Physics, and Informatics. With such a wide range of experiences, I ended up choosing to continue my journey in the field of ITC. I found it super exciting, especially because I had an amazing teacher who made our classes fascinating and taught me a ton.",
          ru: "Привет!",
        },
      },
    ],
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
    speechBubbles: [
      {
        owner: "me",
        text: {
          en: "This is my friend Mariia who graduated last year",
          ru: "",
        },
        timeout: 3500,
      },
      {
        owner: "mari",
        text: {
          en: "Hello Lisa, did you know that I’m studying in Vilnius, Lithuania?",
          ru: "",
        },
        timeout: 4000,
      },
      {
        owner: "me",
        text: {
          en: "She provided me with detailed information regarding studying abroad, including application requirements, pricing aspects, suggestions for potential universities, the benefits of studying in a foreign country, and comprehensive details about how Erasmus programs function. As I got more engrossed in the idea, studying abroad started feeling more achievable and realistic for me. Yet, I faced a dilemma—I couldn't decide whether to study in the absolutely lovely city of Saint Petersburg or venture out and explore a completely new place.",
          ru: "",
        },
      },
    ],
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
    speechBubbles: [
      {
        owner: "me",
        text: {
          en: "So, I decided to tell my mom about Mariia's story, and it turned out she got really inspired too.",
          ru: "",
        },
        timeout: 4000,
      },
      {
        owner: "mother",
        text: {
          en: "Honestly, I had thought about sending my kids (Lisa and her brother) to study abroad before, but I never really considered the Baltic states as an option. Among our friends, Finland and Germany seemed to be the top choices for studying abroad.",
          ru: "",
        },
        timeout: 15000,
      },
      {
        owner: "me",
        text: {
          en: "Excited by the idea, we started checking out universities in the Baltic countries and ended up with four choices: LU, RTU, and two universities in Kaunas, Lithuania. We were really drawn to these options because they had great locations, affordable prices, and interesting subjects, they also presented a wide range of opportunities.",
          ru: "",
        },
      },
    ],
  },
  {
    title: {
      ru: "Подготовка",
      en: "Preparation",
    },
    image: "springVyborg",
    speechBubbles: [{ owner: "me", text: { en: "aaaaaaa", ru: "фывфыв" } }],
  },
  {
    title: {
      ru: "IELTS",
      en: "IELTS",
    },
    image: "summerVyborg",
    month: "june",
    speechBubbles: [{ owner: "me", text: { en: "asddsdar", ru: "фрфрфрр" } }],
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
    speechBubbles: [{ owner: "me", text: { en: "bla", ru: "фыв" } }],
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
    speechBubbles: [{ owner: "me", text: { en: "asdads", ru: "длоав" } }],
  },
];

function Main({ language }) {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);

  const switchChapter = (e) => {
    if (isAnimation) {
      return;
    }

    const direction = e.target.getAttribute("data-value");
    const isNext = direction === "next";
    const rotateTo = isNext ? "450deg" : "-270deg";

    document.documentElement.style.setProperty("--rotate-to", rotateTo);
    setIsAnimation(true);

    setTimeout(() => {
      setIsAnimation(false);

      if (isNext) {
        setCurrentChapter(currentChapter + 1);
      } else if (currentChapter !== 0) {
        setCurrentChapter(currentChapter - 1);
      }
    }, 3000);
  };

  return (
    <div className={classes.root}>
      <Navigation
        onClick={switchChapter}
        currentChapter={currentChapter}
        title={chapters[currentChapter].title[language]}
      />
      <SeasonSlider
        imageName={chapters[currentChapter].image}
        speechBubbles={chapters[currentChapter].speechBubbles}
        isMother={chapters[currentChapter].attributes?.mother}
        isMari={chapters[currentChapter].attributes?.mari}
        currentChapter={currentChapter}
        chapters={chapters}
        isAnimation={isAnimation}
        language={language}
      />
    </div>
  );
}

export default Main;
