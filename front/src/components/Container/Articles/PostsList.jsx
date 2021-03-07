import Article from './Article/Article'
import { Link } from 'react-router-dom'
import './PostsList.css'

function PostsList({ posts, isFetching }) {
  return (
    <div className='main'>
      {isFetching && <span>Loading...</span>}
      {!isFetching &&
        posts.map((el, index) => (
          <Link to={'/article/' + el.id} className='article-block' key={index}>
            <Article id={el.id} title={el.title} text={el.content} />
          </Link>
        ))}
    </div>
  )
}

export default PostsList
