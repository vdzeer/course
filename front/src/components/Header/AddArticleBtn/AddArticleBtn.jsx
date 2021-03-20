import { useState } from 'react'
import PostAction from '../../../containers/Posts/PostAction'
import './AddArticleBtn.css'

function AddArticleBtn() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  return (
    <>
      <div className='addArticle' onClick={handleOpen}>
        <span className='addArticle-text'>Add Article</span>
      </div>
      {isOpen ? <PostAction isOpen={isOpen} handleClose={handleClose} /> : null}
    </>
  )
}

export default AddArticleBtn
