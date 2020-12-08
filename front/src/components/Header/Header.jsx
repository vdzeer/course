import './Header.css';
import Logo from './Logo/Logo';
import AddArticle from './AddArticle/AddArticle';
import User from './User/User';


function Header() {
  return (
    <div className="header">
      <Logo />
      <AddArticle />
      <User />
    </div>
  );
}

export default Header;