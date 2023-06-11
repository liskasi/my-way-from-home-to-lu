import React from "react";
import classes from "./Header.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function Header({language, setLanguage}) {

  const handleClickScrollSection1 = () => {
    const element = document.getElementById('section1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScrollSection2 = () => {
    const element = document.getElementById('section2');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.menu}>
        <div className={classes.item}><a className={classes.itemLink} onClick={handleClickScrollSection1}>{language === "ru" ? "Введение" : "Introduction"}</a></div>
        <div className={classes.item}><a className={classes.itemLink} onClick={handleClickScrollSection2}>{language === "ru" ? "Мой путь от дома до ЛУ" : "My way from home to LU"}</a></div>
      </div>
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default Header;
