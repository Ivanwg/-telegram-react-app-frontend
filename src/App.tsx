import React, { useEffect } from 'react';
import 'normalize.css';
import './global.scss';
import Header from './components/Header/Header';

const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready();
  }, []);


  return (
    <Header />
  );
}

export default App;
