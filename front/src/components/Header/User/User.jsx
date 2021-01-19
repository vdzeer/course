import PropTypes from 'prop-types';
import './User.css';
import userPhoto from './user-logo.jpg';
import {Link} from 'react-router-dom';

function User({username}) {
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
        <Link to='/profile' style={{ textDecoration: 'none' }}>
          <li className="user-dropdown-profile"><span>Profile</span></li>
        </Link>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <li><span>Logout</span></li>
        </Link>
      </ul>
    </div>
  );
}

User.propTypes = {
  username: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired
  })
}

export default User;