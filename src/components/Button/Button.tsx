import './style.scss';

interface IBtnProps {
  classname?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

function Button({classname, children, onClick}: IBtnProps) {
  return ( 
    <button className={'btn'} onClick={onClick}>
      {children}
    </button>
   );
}

export default Button;