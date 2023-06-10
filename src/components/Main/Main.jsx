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
    clock: {
      hours: 9,
      minutes: 50,
    },
    speechBubbles: [
      {
        owner: "me",
        text: {
          en: "Hey there! I'm Lisa, a 20-year-old from Vyborg, Russia. During my school years, I was all over the place trying out different things. I did gymnastics, attended music school where I successfully completed piano classes, played tennis, and took drawing and filmmaking classes—you name it! Additionally to school which I finished with distinction and honours, I studied English, Physics, and Informatics. With such a wide range of experiences, I ended up choosing to continue my journey in the field of ITC. I found it super exciting, especially because I had an amazing teacher who made our classes fascinating and taught me a ton.",
          ru: "Привет! Я Лиза, мне 20 лет и я из Выборга. В школьные годы я всегда пробовала разные вещи: занималась гимнастикой, посещала музыкальную школу, где успешно закончила уроки игры на фортепиано, играла в теннис, занималась рисованием и киносъемкой — не перечислить! Помимо школы, которую я закончила с отличием, я изучала английский язык, физику и информатику. Имея такой широкий спектр опыта, я решил продолжить свое путешествие в области ИКТ. Для меня это было очень интересным, особенно потому, что у меня был замечательная учительца, которая делала наши занятия увлекательными и многому меня научила.",
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
    clock: {
      hours: 10,
      minutes: 30,
    },
    attributes: {
      mari: true,
    },
    speechBubbles: [
      {
        owner: "me",
        text: {
          en: "This is my friend Mariia who graduated last year",
          ru: "Это моя подруга Мария, которая закончила школу в прошлом году.",
        },
        timeout: 3500,
      },
      {
        owner: "mari",
        text: {
          en: "Hello Lisa, did you know that I’m studying in Vilnius, Lithuania?",
          ru: "Привет, Лиза! Ты знала, что я учусь в Вильнюсе?",
        },
        timeout: 4000,
      },
      {
        owner: "me",
        text: {
          en: "She provided me with detailed information regarding studying abroad, including application requirements, pricing aspects, suggestions for potential universities, the benefits of studying in a foreign country, and comprehensive details about how Erasmus programs function. As I got more engrossed in the idea, studying abroad started feeling more achievable and realistic for me. Yet, I faced a dilemma—I couldn't decide whether to study in the absolutely lovely city of Saint Petersburg or venture out and explore a completely new place.",
          ru: "Она дала мне подробную информацию об обучении за границей, включая требования к поступлению, цен, рекомендации университетов, преимущества обучения в другой стране, о том, как работает программа Erasmus. После её рассказа, учеба за границей стала казаться мне более достижимой и реалистичной. Тем не менее, у меня была дилемма — я не могла решить, учиться ли мне в любимом городе Санкт-Петербург или рискнуть и поехать в совершенно новое место».",
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
    clock: {
      hours: 11,
      minutes: 55,
    },
    attributes: {
      mother: true,
      unis: true,
    },
    speechBubbles: [
      {
        owner: "me",
        text: {
          en: "So, I decided to tell my mom about Mariia's story, and it turned out she got really inspired too.",
          ru: "Я решила рассказать маме историю Марии, и оказалось, что она тоже очень вдохновилась.",
        },
        timeout: 4000,
      },
      {
        owner: "mother",
        text: {
          en: "Honestly, I had thought about sending my kids (Lisa and her brother) to study abroad before, but I never really considered the Baltic states as an option. Among our friends, Finland and Germany seemed to be the top choices for studying abroad.",
          ru: "Если честно, я и раньше думала, чтоб отправить своих детей (Лизы и её брата) учиться за границу, но никогда не рассматривала страны Балтии как вариант. Среди наших друзей Финляндия и Германия казались лучшим выбором для обучения за границей.",
        },
        timeout: 15000,
      },
      {
        owner: "me",
        text: {
          en: "Excited by the idea, we started checking out universities in the Baltic countries and ended up with four choices: LU, RTU, and two universities in Kaunas, Lithuania. We were really drawn to these options because they had great locations, affordable prices, and interesting subjects, they also presented a wide range of opportunities.",
          ru: "Воодушевленные этой идеей, мы начали проверять университеты в странах Балтии и остановились на четырех вариантах: ЛУ, РТУ и два университета в Каунасе, Литва. Нас очень привлекали эти варианты, потому что у них были отличные локации, доступные цены и интересные предметы, а также они давали широкий спектр возможностей.",
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
    clock: {
      hours: 12,
      minutes: 12,
    },
    speechBubbles: [
      {
        owner: "me",
        text: {
          en: "I looked at the list of documents I needed to get ready: IELTS, motivational letter, recommendation letters, document verification, and a few others. I was supposed to take the IELTS exam in early March, but because of COVID, it kept getting postponed over and over again.",
          ru: "Я взяла список документов, которые мне нужно было подготовить: IELTS, мотивационное письмо, рекомендательные письма, апостиль документов и некоторые другие. У меня должен был бы IELTS в начале марта, но из-за ковида его постоянно откладывали.",
        },
      },
    ],
  },
  {
    title: {
      ru: "IELTS",
      en: "IELTS",
    },
    image: "summerVyborg",
    month: "june",
    clock: {
      hours: 3,
      minutes: 5,
    },
    speechBubbles: [
      {
        owner: "me",
        text: {
          en: "In the end, I managed to take the IELTS exam on June 15th, just two weeks before the application deadline (which was later extended). Generally, it went well. However, during the Speaking part, they asked me some strange questions about pens and pencils that caught me off guard because I wasn't prepared for that kind of question. But the important thing is that I received my IELTS certificate, and now I can go ahead and apply for university.",
          ru: "В итоге мне удалось сдать экзамен IELTS 15 июня, всего за две недели до дедлайна подачи заявок (который позже был продлен). В целом, прошло хорошо. Однако во время разговорной части мне задали несколько странных вопросов о ручках и карандашах, которые застали меня врасплох, потому что я не была готов к такого рода вопросам. Но главное - я получила сертификат IELTS и теперь могу подаваться в университет.",
        },
      },
    ],
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
    clock: {
      hours: 7,
      minutes: 40,
    },
    speechBubbles: [
      {
        owner: "me",
        text: {
          en: "Unfortunately, it was the first year when COVID started, so our graduation didn't have many things going on. We got our diplomas, but there was no performance at school. I don't really regret it because preparing for it would take up a lot of time. Instead, we had a really nice unofficial gathering with our classmates and parents. We had a photo shoot, danced, and even had some competitions. However, there's an annual event in Saint Petersburg for graduating students called Scarlet Sails, and it was my dream to attend. But unfortunately, it was held remotely. \n As for the exams, for some reason, I decided to take five exams instead of the usual three that most people take. Before almost each exam, I took 10-day courses (five hours a day) to refresh my knowledge on the subjects. So, I had to attend 10 hours of these courses every day. It may sound a bit crazy, but I actually enjoyed those times and looking back, I think fondly of them. In the end, I achieved the highest score in the Math exam among all the students in my hometown. It's something I'm still proud of :)",
          ru: "К сожалению, это был первый год, когда начался COVID, поэтому на нашем выпускном много вещей было отменено. Дипломы получали отдельно друг от друга, но какого-то мероприятия в школе не было. Я не очень жалею об этом, потому что подготовка к нему заняла бы много времени. Вместо этого у нас была очень приятная неофициальная встреча с одноклассниками и родителями. Мы устроили фотосессию, танцевали и участвовали в конкурсах от ведущего. \n В Санкт-Петербурге ежегодно проводится мероприятие для выпускников «Алые паруса», и я мечтала там побывать. Но, к сожалению, в 2020 он проходил дистанционно. \n Что касается экзаменов, почему-то я решила сдавать пять экзаменов вместо трёх, как сдают большинство. Почти перед каждым экзаменом я проходила 10-дневные курсы (по пять часов в день), чтобы повторить все темы по предметам. Мне приходилось каждый день заниматься по 10 часов. Это может звучать немного безумно, но мне действительно нравились те времена, и, оглядываясь назад, я вспоминаю их с теплом. В результате, я получила самый высокий балл на экзамене по математике в моём городе. И это то, чем я до сих пор горжусь :)",
        },
      },
    ],
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
    clock: {
      hours: 8,
      minutes: 35,
    },
    speechBubbles: [
      {
        owner: "me",
        text: {
          en: "When I received the positive response from the university, my parents and I hurried to complete all the necessary paperwork so I could go to Latvia. Everything happened so fast... However, I still had to gather my belongings. It was challenging to decide what to take with me because it was uncertain when the borders would open. In the end, I had a 30kg suitcase. But then it turned out that I had to cross the border on foot. It was tough, but luckily, there were kind people who helped me carry my suitcase. When I finally arrived in Riga, the weather was amazing, and I instantly fell in love with the parks and the beautiful architecture. Everything was so picturesque and charming.",
          ru: "Как только я получила положительный ответ от университета, мы с родителями побежали делать документы, чтобы я поехала в Латвию. Всё происходило быстро. Ещё надо было собрать вещи. Было сложно планировать, что нужно брать с собой, потому что было непонятно, когда границы откроются. Итого, 30кг чемодан готов. И вдруг оказалось, что границу надо будет переходить пешком. Было трудно, но мне много, кто помогал таскать чемодан. Когда я приехала в Ригу, была прекрасная погода, мне очень понравились парки и архитектура - всё было очень красиво.",
        },
      },
    ],
  },
];

function Main({ language }) {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);
  const [isBack, setIsBack] = useState(false);

  const switchChapter = (e) => {
    if (isAnimation) {
      return;
    }

    const direction = e.target.getAttribute("data-value");
    const isNext = direction === "next";
    const rotateTo = isNext ? "450deg" : "-270deg";

    document.documentElement.style.setProperty("--rotate-to", rotateTo);
    setIsAnimation(true);

    if (!isNext) {
      setIsBack(true);
    }

    setTimeout(() => {
      setIsAnimation(false);
      setIsBack(false);

      if (isNext) {
        setCurrentChapter(currentChapter + 1);
      } else if (currentChapter !== 0) {
        setCurrentChapter(currentChapter - 1);
      }
    }, 2900);
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
        isBack={isBack}
        language={language}
        clock={chapters[currentChapter].clock}
      />
      {/* <Clock clock={chapters[currentChapter].clock} /> */}
    </div>
  );
}

export default Main;
