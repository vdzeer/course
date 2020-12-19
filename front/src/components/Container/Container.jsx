import './Container.css';
import Articles from './Articles/Articles';
import AddArticle from './AddArticle/AddArticle';
import Profile from './Profile/Profile';


function Container(props) {
  return (
    <div className="container">
      {props.logo && <Articles />}
      {props.addBtn && <AddArticle />}
      {props.profile && <Profile setUsername={props.setUsername}/>}
    </div>
  );
}

export default Container;