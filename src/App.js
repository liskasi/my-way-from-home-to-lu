import React, { useState } from "react";
import Introduction from "./components/Introduction/Introduction";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className={styles.root}>
      <p className={styles.msg}>
        The website is mostly ready but there are some things that I still need
        to adjust
      </p>
      <Header language={language} setLanguage={setLanguage} />
      <Introduction language={language} />
      <Main language={language} />
    </div>
  );
}

export default App;
