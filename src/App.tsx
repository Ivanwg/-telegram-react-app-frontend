import React, { useEffect } from 'react';
import 'normalize.css';
import './global.scss';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';


function App() {
  const {tg, onToggleBtn} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);


  return (
    <div>
      <Header />
      <button onClick={onToggleBtn}>toggle</button>
    </div>
  );
}

export default App;
