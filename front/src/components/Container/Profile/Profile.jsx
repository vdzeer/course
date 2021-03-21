import { Formik, Field, Form } from 'formik'
import { useState, useCallback } from 'react'
import { useMutation } from 'react-query'

import * as Yup from 'yup'
import Button from '@material-ui/core/Button'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import {
  updateProfile,
  updateAvatar,
} from '../../../containers/Users/hooks/userReq'
import './Profile.css'

function Profile({ setUsername }) {
  const [image, setImage] = useState()
  const [cropper, setCropper] = useState()
  const [croppedImage, setCroppedImage] = useState()

  const { mutate: editUser } = useMutation(updateProfile)
  const { mutate: editAvatar } = useMutation(updateAvatar)

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Required very important field'),
    surname: Yup.string()
      .min(1, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Required very important field'),
  })

  const validateImage = (file) => {
    return (
      file.size < 10000000 &&
      ['image/png', 'image/jpg', 'image/jpeg'].includes(file.type)
    )
  }

  /**
   * TODO:
   *  Take user id
   *  */
  const userId = 1

  const onSubmit = useCallback(
    async (formData) => {
      try {
        await editUser({ userId, formData })
      } catch (error) {
        console.log(error)
      }
    },
    [editUser]
  )

  const onSaveImage = useCallback(
    async (data) => {
      try {
        await editAvatar({ userId, data })
      } catch (error) {
        console.log(error)
      }
    },
    [editAvatar]
  )

  const handleSubmit = (data) => {
    onSubmit({ ...data, image: croppedImage })
    window.location.reload()
  }

  const handleSaveImage = (data) => {
    onSaveImage({ image: croppedImage })
  }

  const handleChange = (e) => {
    e.preventDefault()

    const reader = new FileReader()
    if (validateImage(e.target.files[0])) {
      reader.onload = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const cropImage = () => {
    if (cropper) {
      setCroppedImage(cropper.getCroppedCanvas().toDataURL())
    }
  }

  return (
    <div className='main'>
      <h2 className='main__title'>Change name:</h2>
      <div className='profile-edit'>
        <Formik
          validationSchema={userSchema}
          initialValues={{
            name: '',
            surname: '',
          }}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className='profile-edit-form'>
              <div>
                <label htmlFor='name'>New name:</label>
                <Field id='name' name='name' placeholder='Enter new name...' />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
              </div>

              <div>
                <label htmlFor='surname'>New surname:</label>
                <Field
                  id='surname'
                  name='surname'
                  placeholder='Enter new surname...'
                />
                {errors.surname && touched.surname ? (
                  <div>{errors.surname}</div>
                ) : null}
              </div>
              <button type='submit'>Submit</button>
            </Form>
          )}
        </Formik>

        <h2 className='main__title'>Change avatar:</h2>
        {!croppedImage && (
          <Button variant='contained' component='label'>
            Upload new image
            <input onChange={handleChange} hidden type='file' name='avatar' />
          </Button>
        )}
        {image && !croppedImage && (
          <Cropper
            src={image}
            initialAspectRatio={3 / 3}
            onInitialized={(instance) => setCropper(instance)}
          />
        )}
        {image && !croppedImage && (
          <button type='submit' variant='contained' onClick={cropImage}>
            Crop image!
          </button>
        )}
        {croppedImage && <img src={croppedImage} alt='cropped' />}
        {croppedImage && (
          <Button variant='contained' onClick={handleSaveImage}>
            Save
          </Button>
        )}
      </div>
    </div>
  )
}

export default Profile
