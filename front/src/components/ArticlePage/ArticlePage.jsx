import { Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Article from '../Container/Articles/Article/Article'

function ArticlePage({ routes }) {
  const [post, setPost] = useState({})
  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts/${routes.match.params.id}`)
      .then((res) => setPost(res.data))
  }, [])

  return post ? (
    <div className='article-block'>
      <Article title={post.title} text={post.content} />
    </div>
  ) : (
    <Redirect to='/' />
  )
}

export default ArticlePage
