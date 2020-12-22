import PropTypes from 'prop-types';
import './Profile.css';

function Profile({setUsername}) {
  const submitForm = (e) => {
    e.preventDefault();
    setUsername({'name': e.target[0].value, 'surname': e.target[1].value});
  }

  return (
    <div className="main">
      <h2 className="main__title">Profile</h2>
      <div className="profile-edit">
        <form className="profile-edit-form" onSubmit={submitForm}>
          <input type="text" className="profile-edit__input" placeholder="Name" name="input_name" required/>
          <input type="text" className="profile-edit__input" placeholder="Surname" name="input_surname" required/>
          <button type="submit">Change data!</button>
        </form>
      </div>
    </div>
  );
}

Profile.propTypes = {
  setUsername: PropTypes.func.isRequired
}

export default Profile;