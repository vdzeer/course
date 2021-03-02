import './Article.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Article({ id, title, text }) {
  return (
    <div className='article'>
      <h2 className='article__title'>{title}</h2>
      <span className='article__text'>{text}</span>
      <br />
      <Link to={`/editArticle/${id}`}>Edit</Link>
    </div>
  )
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Article
