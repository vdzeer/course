import './User.css';
import './user_app.js';
import userPhoto from './user-logo.jpg'

function User() {
  return (
    <div className="user">
      <img src={userPhoto} alt="Logo" className="user-logo"/>
      <span className="user__name">Ivan Ivanov</span>
      <ul className="user-dropdown">
        <li><a href="./">Profile</a></li>
        <li><a href="./">Logout</a></li>
      </ul>
    </div>
  );
}

export default User;