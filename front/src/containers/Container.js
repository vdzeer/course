import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import React, {useState} from 'react';

function ContainerContainer() {
  // Handlers:
  const [handlers, setHandlers] = useState({'logo': true, 'addBtn': false, 'profile': false});

  const logoHandler = () => setHandlers({'logo': true, 'addBtn': false, 'profile': false});
  const addBtnHandler = () => setHandlers({'logo': false, 'addBtn': true, 'profile': false});
  const profileHandler = () => setHandlers({'logo': false, 'addBtn': false, 'profile': true});

  // Username:
  const [username, setUsername] = useState({'name': 'Ivan', 'surname': 'Ivanov'});

  return (
    <> 
      <Header logoHandler={logoHandler} addBtnHandler={addBtnHandler} profileHandler={profileHandler} username={username}/>
      <Container logo={handlers.logo} addBtn={handlers.addBtn} profile={handlers.profile} setUsername={setUsername}/>
    </>
  );
}

export default ContainerContainer;