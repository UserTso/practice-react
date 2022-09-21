import style from './Header.module.css';

const Header = ({ title }) => {
  return <>{title ? <h1 className="header-title">{title}</h1> : 'No title'}</>;
};

export default Header;
