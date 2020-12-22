import PropTypes from 'prop-types';
import './User.css';
import userPhoto from './user-logo.jpg';


function User({username, profileClick}) {
  const profileHandler = () => {
    const userBlock = document.querySelector('.user');
    const dropdown = document.querySelector('.user-dropdown');
    const profileBtn = document.querySelector('.user-dropdown-profile');
  
    userBlock.addEventListener('click', () => {
      dropdown.classList.toggle('active');
    });

    profileBtn.addEventListener('click', () => {
      dropdown.classList.remove('active');
    });
  } 

  return (
    <div className="user" onClick={profileHandler}>
      <img src={userPhoto} alt="Logo" className="user-logo"/>
      <span className="user__name">{username.name} {username.surname}</span>
      <ul className="user-dropdown">
        <li onClick={profileClick} className="user-dropdown-profile"><span>Profile</span></li>
        <li><span>Logout</span></li>
      </ul>
    </div>
  );
}

const usernameType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
});

User.propTypes = {
  username: usernameType,
  profileClick: PropTypes.func.isRequired
}

export default User;