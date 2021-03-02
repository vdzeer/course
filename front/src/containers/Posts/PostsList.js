import { useQuery } from 'react-query'
import { getPosts } from './hooks/postReq'
import PostsList from '../../components/Container/Articles/PostsList'
import { useState } from 'react'

function PostsListContainer() {
  const [limit, setLimit] = useState(3)
  const { data: response, isFetching } = useQuery(['posts', limit], () =>
    getPosts({ limit })
  )
  const posts = response?.data || []

  const handleSubmit = () => {
    setLimit(limit + 3)
  }

  return (
    <>
      <PostsList posts={posts} isFetching={isFetching} />
      <button onClick={handleSubmit}>Load more</button>
    </>
  )
}

export default PostsListContainer
