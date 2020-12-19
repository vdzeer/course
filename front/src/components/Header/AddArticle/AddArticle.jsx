import './AddArticle.css';

function AddArticle(props) {
  return (
    <div className="article" onClick={props.onClick}>
      <span className="article-text">Add Article</span>
    </div>
  );
}

export default AddArticle;