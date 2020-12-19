import './User.css';
import userPhoto from './user-logo.jpg'

function User(props) {
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
      <span className="user__name">{props.username.name} {props.username.surname}</span>
      <ul className="user-dropdown">
        <li onClick={props.onClick} className="user-dropdown-profile"><span>Profile</span></li>
        <li><span>Logout</span></li>
      </ul>
    </div>
  );
}

export default User;