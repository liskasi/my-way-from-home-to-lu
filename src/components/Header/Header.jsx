import React from "react";
import classes from "./Header.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function Header({language, setLanguage}) {

  const handleClickScrollSection1 = () => {
    const element = document.getElementById('section-1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScrollSection2 = () => {
    const element = document.getElementById('section-2');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.menu}>
        <a href="#section1" onClick={handleClickScrollSection1}>{language === "ru" ? "Введение" : "Introduction"}</a>
        <a href="#section2" onClick={handleClickScrollSection2}>{language === "ru" ? "Мой путь от дома до ЛУ" : "My way from home to LU"}</a>
      </div>
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default Header;
