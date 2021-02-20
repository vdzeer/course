import Article from './Article/Article'
import { Link } from 'react-router-dom'
import './PostsList.css'

function PostsList({ posts }) {
  return (
    <div className='main'>
      {posts.map((el, index) => (
        <Link to={'/article/' + el.id} className='article-block' key={index}>
          <Article title={el.title} text={el.content} />
        </Link>
      ))}
    </div>
  )
}

export default PostsList
