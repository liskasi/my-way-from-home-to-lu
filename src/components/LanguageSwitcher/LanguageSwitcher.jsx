import React from "react";
import classes from "./LanguageSwitcher.module.css";

function LanguageSwitcher({ language, setLanguage }) {
  const handleChange = (e) => {
    setLanguage(e.target.value)
  };

  return (
    <div className={classes.root}>
      <select className={classes.select} value={language} onChange={handleChange}>
        <option className={classes.option} value="ru">Ru</option>
        <option className={classes.option} value="en">En</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
