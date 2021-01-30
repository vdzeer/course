import Article from './Article/Article'
import { Link } from 'react-router-dom'
import './Articles.css'

function Articles({ posts }) {
  return (
    <div className='main'>
      {posts.map((el, index) => (
        <Link to={'/article/' + el.title} className='article-block' key={index}>
          <Article title={el.title} text={el.text} />
        </Link>
      ))}
    </div>
  )
}

export default Articles
