import PropTypes from 'prop-types';

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
      <User profileClick={profileClick} username={username}/>
    </div>
  );
}

const usernameType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
});

Header.propTypes = {
  setHandler: PropTypes.func.isRequired,
  username: usernameType,
  setUsername: PropTypes.func.isRequired,
}

export default Header;