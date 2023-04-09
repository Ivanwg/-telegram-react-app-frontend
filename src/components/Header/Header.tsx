import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";
import './style.scss';



function Header() {
  const {onClose, user} = useTelegram();



  
  return ( 
    <header className='header'>
      <Button onClick={onClose}>Закрыть</Button>
      <span className='username'>
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          user?.username
        }
      </span>
    </header>
   );
}

export default Header;