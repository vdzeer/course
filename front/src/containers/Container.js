import Container from '../components/Container/Container';
import Header from './Header/Header';
import React, {useState} from 'react';
import Articles from '../components/Container/Articles/Articles';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoudary';

function ContainerContainer() {
  // Username:
  const [username, setUsername] = useState({'name': 'No', 'surname': 'Name'});
  // Handler state:
  const [handlerState, setHandler] = useState(<Articles />);

  return (
    <> 
      <Header setHandler={setHandler} username={username} setUsername={setUsername}/>
      <ErrorBoundary>
        <Container handlerState={handlerState}/>
      </ErrorBoundary>
    </>
  );
}

export default ContainerContainer;