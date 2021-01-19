import PropTypes from 'prop-types';
import './Container.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Articles from './Articles/Articles';
import AddArticle from './AddArticle/AddArticle';
import Profile from './Profile/Profile';

function Container({setUsername}) {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/addArticle" component={AddArticle} />
        <Route exact path="/profile"> 
          <Profile setUsername={setUsername} />
        </Route>
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

Container.propTypes = {
  setUsername: PropTypes.func.isRequired,
}

export default Container;