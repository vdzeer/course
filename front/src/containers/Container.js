import Container from '../components/Container/Container';
import Header from './Header/Header';
import React, {useState} from 'react';


function MainContainer() {
  // Username:
  const [username, setUsername] = useState({'name': 'No', 'surname': 'Name'});

  return (
    <>
      <Header username={username} />
      <Container setUsername={setUsername} /> 
    </>
  );
}

export default MainContainer;