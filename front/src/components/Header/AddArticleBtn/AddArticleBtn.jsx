import PropTypes from 'prop-types';
import './AddArticleBtn.css';

function AddArticleBtn({addArticleClick}) {
  return (
    <div className="article" onClick={addArticleClick}>
      <span className="article-text">Add Article</span>
    </div>
  );
}

AddArticleBtn.propTypes = {
  addArticleClick: PropTypes.func.isRequired
}

export default AddArticleBtn;