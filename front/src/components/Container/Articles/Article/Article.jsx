import './Article.css'
import PropTypes from 'prop-types'
import ArticleEditBtn from './ArticleEditBtn'
import { Link } from 'react-router-dom'

function Article({ id, title, text }) {
  return (
    <>
      <div className='article'>
        {
          <Link
            to={'/article/' + id}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <h2 className='article__title'>{title}</h2>
          </Link>
        }
        <span className='article__text'>{text}</span>
        <br />
        {<ArticleEditBtn id={id} />}
      </div>
    </>
  )
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Article
