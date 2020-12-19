import './Header.css';
import Logo from './Logo/Logo';
import AddArticle from './AddArticle/AddArticle';
import User from './User/User';

function Header(props) {
  return (
    <div className="header">
      <Logo onClick={props.logoHandler}/>
      <AddArticle onClick={props.addBtnHandler}/>
      <User onClick={props.profileHandler} username={props.username}/>
    </div>
  );
}

export default Header;