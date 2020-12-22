import './AddArticleBtn.css';

function AddArticleBtn({onClick}) {
  return (
    <div className="article" onClick={onClick}>
      <span className="article-text">Add Article</span>
    </div>
  );
}

export default AddArticleBtn;