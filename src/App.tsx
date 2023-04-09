import React, { useEffect } from 'react';
import 'normalize.css';
import './global.scss';

const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready();
  }, []);
  
  const onClose = () => {
    tg.close();
  }

  return (
    <div>
      work

      <button onClick={onClose}>close</button>
    </div>
  );
}

export default App;
