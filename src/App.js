import React, {useState} from 'react';
import Introduction from './components/Introduction/Introduction';
import styles from './App.module.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Clock from './components/Clock/Clock';

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className={styles.root}>
      <Header language={language} setLanguage={setLanguage} />
      <Introduction language={language} />
      <Main language={language} />
      <Clock />
    </div>
  );
}

export default App;
