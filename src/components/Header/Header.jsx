import React from "react";
import classes from "./Header.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function Header({language, setLanguage}) {
  return (
    <div className={classes.root}>
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default Header;
