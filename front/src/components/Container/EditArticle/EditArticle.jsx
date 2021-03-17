import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import './EditArticle.css'
import { useHistory } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'

function EditArticle({ post, onSubmit, edit, isOpen, handleClose }) {
  const postSchema = Yup.object().shape({
    title: Yup.string()
      .min(1, 'Too Short!')
      .max(40, 'Too Long!')
      .required('Required very important field'),
    text: Yup.string()
      .min(1, 'Too Short!')
      .max(500, 'Too Long!')
      .required('Required very important field'),
    access: Yup.string()
      .oneOf(['All', 'Friends', 'Only me'])
      .required('Required very important field'),
  })

  const history = useHistory()

  const handleSubmit = (data) => {
    onSubmit(data)
    history.push('/')
  }

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle className='main__title' onClose={handleClose}>
          {edit ? 'Edit article' : 'Add article'}
        </DialogTitle>
        <DialogContent>
          <Formik
            enableReinitialize
            initialValues={{
              title: post.title,
              text: post.content,
              access: post.access,
            }}
            validationSchema={postSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className='add_form'>
                <div>
                  <label htmlFor='title'>Title:</label>
                  <Field id='title' name='title' placeholder='Enter title...' />
                  {errors.title && touched.title ? (
                    <div>{errors.title}</div>
                  ) : null}
                </div>

                <div>
                  <label htmlFor='email'>Text:</label>
                  <Field id='text' name='text'>
                    {({ field }) => (
                      <div>
                        <textarea
                          type='text'
                          placeholder='Enter text...'
                          {...field}
                        />
                      </div>
                    )}
                  </Field>
                  {errors.text && touched.text ? (
                    <div>{errors.text}</div>
                  ) : null}
                </div>

                <div role='group' aria-labelledby='radio-group'>
                  <label>
                    <Field type='radio' name='access' value='All' />
                    All
                  </label>
                  <label>
                    <Field type='radio' name='access' value='Friends' />
                    Friends
                  </label>
                  <label>
                    <Field type='radio' name='access' value='Only me' />
                    Only me
                  </label>
                  {errors.access && touched.access ? (
                    <div>{errors.access}</div>
                  ) : null}
                </div>

                <button type='submit'>Submit</button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default EditArticle
