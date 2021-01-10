import PropTypes from 'prop-types';

import './Header.css';
import Logo from '../../components/Header/Logo/Logo';
import AddArticleBtn from '../../components/Header/AddArticleBtn/AddArticleBtn';
import User from '../../components/Header/User/User';
import Articles from '../../components/Container/Articles/Articles';
import AddArticle from '../../components/Container/AddArticle/AddArticle';
import Profile from '../../components/Container/Profile/Profile';

function Header({setHandler, username, setUsername}) {
  const logoClick = () => setHandler(<Articles />);
  const addArticleClick = () => setHandler(<AddArticle />);
  const profileClick = () => setHandler(<Profile setUsername={setUsername}/>);

  return (
    <div className="header">
      <Logo logoClick={logoClick}/>
      <AddArticleBtn addArticleClick={addArticleClick}/>
      <User profileClick={profileClick} username={username}/>
    </div>
  );
}

Header.propTypes = {
  setHandler: PropTypes.func.isRequired,
  username: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired
  }),
  setUsername: PropTypes.func.isRequired,
}

export default Header;