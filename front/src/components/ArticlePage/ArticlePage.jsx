import { Redirect } from 'react-router-dom'
import Article from '../Container/Articles/Article/Article'

function ArticlePage({ routes, posts }) {
  const el = posts.find((el) => el.title === routes.match.params.title)
  return el ? (
    <div className='article-block'>
      <Article title={el.title} text={el.text} />
    </div>
  ) : (
    <Redirect to='/' />
  )
}

export default ArticlePage
