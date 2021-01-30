import './Article.css'
import PropTypes from 'prop-types'

function Article({ title, text }) {
  return (
    <div className='article'>
      <h2 className='article__title'>{title}</h2>
      <span className='article__text'>{text}</span>
    </div>
  )
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Article
