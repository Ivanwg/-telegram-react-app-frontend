import './style.scss';

interface IBtnProps {
  classname?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

function Button({classname, children}: IBtnProps) {
  return ( 
    <button className={'btn' + classname}>
      {children}
    </button>
   );
}

export default Button;