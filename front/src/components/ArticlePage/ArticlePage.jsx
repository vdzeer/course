import { Redirect } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getOnePost } from '../../containers/Posts/hooks/postReq'

function ArticlePage({ routes }) {
  const postId = routes.match.params.id
  const { data: response } = useQuery('posts', () => getOnePost({ postId }))
  const post = response?.data || null

  return post ? (
    <div className='article-block'>
      <div className='article'>
        <h2 className='article__title'>{post.title}</h2>
        <span className='article__text'>{post.content}</span>
      </div>
    </div>
  ) : (
    <Redirect to='/' />
  )
}

export default ArticlePage
