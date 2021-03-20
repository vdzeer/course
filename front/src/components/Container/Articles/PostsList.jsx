import Article from './Article/Article'
import { Link } from 'react-router-dom'
import './PostsList.css'

function PostsList({ posts, isFetching }) {
  return (
    <div className='main'>
      {isFetching && <span>Loading...</span>}
      {!isFetching && (
        <div className='article-block'>
          {posts.map((el, index) => (
            <Article id={el.id} title={el.title} text={el.content} />
          ))}
        </div>
      )}
    </div>
  )
}

export default PostsList
