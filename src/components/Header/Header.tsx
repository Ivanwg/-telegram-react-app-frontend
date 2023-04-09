import Button from "../Button/Button";
import './style.scss';



function Header() {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close();
  }


  return ( 
    <header className='header'>
      <Button onClick={onClose}>Закрыть</Button>
      <span className='username'>
        {tg.initDataUnsafe?.user?.usernames}
      </span>
    </header>
   );
}

export default Header;