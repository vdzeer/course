import './Profile.css';

function Profile(props) {
  const submitForm = (e) => {
    e.preventDefault();
    const data = [...document.querySelectorAll('.profile-edit__input')];
    props.setUsername({'name': data[0].value, 'surname': data[1].value});
  }

  return (
    <div className="main">
      <h2 className="main__title">Profile</h2>
      <div className="profile-edit">
        <form className="profile-edit-form" onSubmit={submitForm}>
          <input type="text" className="profile-edit__input" placeholder="Name" required/>
          <input type="text" className="profile-edit__input" placeholder="Surname" required/>
          <button type="submit">Change data!</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;