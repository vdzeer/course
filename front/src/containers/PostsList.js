import axios from 'axios'
import { useState, useEffect } from 'react'
import PostsList from '../components/Container/Articles/PostsList'

function PostsListContainer() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/posts').then((res) => setPosts(res.data))
  }, [])

  return <PostsList posts={posts} />
}

export default PostsListContainer
