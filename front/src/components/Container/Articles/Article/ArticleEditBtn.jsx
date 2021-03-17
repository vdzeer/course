import './Article.css'
import PostAction from '../../../../containers/Posts/PostAction'
import { useState } from 'react'

function ArticleEditBtn({ id }) {
  console.log(id)
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <button onClick={handleOpen}>
        <span>Edit post</span>
      </button>
      {isOpen ? (
        <PostAction postId={id} isOpen={isOpen} handleClose={handleClose} />
      ) : null}
    </>
  )
}

export default ArticleEditBtn
