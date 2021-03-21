import { useCallback } from 'react'
import EditArticle from '../../components/Container/EditArticle/EditArticle'
import { getOnePost, createPost, updatePost } from './hooks/postReq'
import { useQuery, useMutation } from 'react-query'

function PostAction({ postId, isOpen, handleClose }) {
  const { data: response } = useQuery('posts', () => getOnePost({ postId }))
  const post = response?.data || { title: '', content: '', access: 'All' }

  const { mutate: addPost } = useMutation(createPost)
  const { mutate: editPost } = useMutation(updatePost)

  const onSubmitAdd = useCallback(
    async (formData) => {
      try {
        await addPost({ formData })
      } catch (error) {
        console.log(error)
      }
    },
    [addPost]
  )

  const onSubmitEdit = useCallback(
    async (formData) => {
      try {
        await editPost({ postId, formData })
      } catch (error) {
        console.log(error)
      }
    },
    [editPost]
  )

  return (
    <EditArticle
      post={post}
      onSubmit={!!postId ? onSubmitEdit : onSubmitAdd}
      edit={!!postId}
      isOpen={isOpen}
      handleClose={handleClose}
    />
  )
}

export default PostAction
