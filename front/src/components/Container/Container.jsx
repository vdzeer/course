import PropTypes from 'prop-types';
import './Container.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Articles from './Articles/Articles';
import AddArticle from './AddArticle/AddArticle';
import Profile from './Profile/Profile';
import ArticlePage from '../ArticlePage/ArticlePage';

function Container({setUsername}) {
  // for first time
  const posts = [
    {
      title: 'First',
      text: 'Some text from first'
    },
    {
      title: 'Second',
      text: 'Some text from second'
    },
    {
      title: 'Third',
      text: 'Some text from third'
    }
  ];
  const file = "(\\d+)-[a-zA-Z]{1, 10}-2020-01-20.(docx|jpeg|pdf|txt)/v.[0-9].[0-9].[0-9]";
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" >
          <Articles posts={posts}/>
        </Route>
        <Route exact 
          path="/article/:title" 
          render={props => 
            <ArticlePage routes={props} posts={posts}/>
          } 
        />
        <Route exact path="/addArticle" component={AddArticle} />
        <Route exact path="/profile"> 
          <Profile setUsername={setUsername} />
        </Route>
        {/* For additional task */}
        <Route  
          path={`/users/:id(\\d+)?/(edit|(avatar/(edit|delete)?)|(file/${file}))?`}
          render={props => 
            console.log(props)}
          />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

Container.propTypes = {
  setUsername: PropTypes.func.isRequired,
}

export default Container;