import PropTypes from 'prop-types';
import './AddArticleBtn.css';

function AddArticleBtn({onClick}) {
  return (
    <div className="article" onClick={onClick}>
      <span className="article-text">Add Article</span>
    </div>
  );
}

AddArticleBtn.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default AddArticleBtn;