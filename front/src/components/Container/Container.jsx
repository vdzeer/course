import PropTypes from 'prop-types'
import './Container.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Profile from './Profile/Profile'
import ArticlePage from '../ArticlePage/ArticlePage'
import PostsListContainer from '../../containers/Posts/PostsList'

function Container({ setUsername }) {
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/'>
          <PostsListContainer />
        </Route>
        <Route
          exact
          path='/article/:id'
          render={(props) => <ArticlePage routes={props} />}
        />
        <Route exact path='/profile'>
          <Profile setUsername={setUsername} />
        </Route>
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

Container.propTypes = {
  setUsername: PropTypes.func.isRequired,
}

export default Container
