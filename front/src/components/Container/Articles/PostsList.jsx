import Article from './Article/Article'
import './PostsList.css'

function PostsList({ posts, isFetching }) {
  return (
    <div className='main'>
      {isFetching && <span>Loading...</span>}
      {!isFetching && (
        <div className='article-block'>
          {posts.map((el, index) => (
            <Article
              id={el.id}
              title={el.title}
              text={el.content}
              image={el.image}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default PostsList
