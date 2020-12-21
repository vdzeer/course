import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import React, {useState} from 'react';
import Articles from '../components/Container/Articles/Articles';

function ContainerContainer() {
  // Username:
  const [username, setUsername] = useState({'name': '', 'surname': ''});
  // Handler state:
  const [handlerState, setHandler] = useState(<Articles />);

  return (
    <> 
      <Header setHandler={setHandler} username={username} setUsername={setUsername}/>
      <Container handlerState={handlerState}/>
    </>
  );
}

export default ContainerContainer;