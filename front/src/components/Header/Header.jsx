import './Header.css';
import Logo from './Logo/Logo';
import AddArticleBtn from './AddArticleBtn/AddArticleBtn';
import User from './User/User';
import Articles from '../Container/Articles/Articles';
import AddArticle from '../Container/AddArticle/AddArticle';
import Profile from '../Container/Profile/Profile';

function Header({setHandler, username, setUsername}) {
  const logoClick = () => setHandler(<Articles />);
  const addArticleClick = () => setHandler(<AddArticle />);
  const profileClick = () => setHandler(<Profile setUsername={setUsername}/>);

  return (
    <div className="header">
      <Logo onClick={logoClick}/>
      <AddArticleBtn onClick={addArticleClick}/>
      <User onClick={profileClick} username={username}/>
    </div>
  );
}

export default Header;