import Container from './containers/Container';
import Guest from './containers/GuestPage/Guest';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Guest} />
      <Route path="*" component={Container} />
    </Switch>
  );
}

export default App;