import React from 'react';
import Introduction from './components/Introduction/Introduction';
import styles from './App.module.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className={styles.root}>
      <Header />
      <Introduction />
      <Main />
    </div>
  );
}

export default App;
