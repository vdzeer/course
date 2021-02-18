import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import axios from 'axios'
import './Sign.css'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

function Header() {
  const [success, setSuccess] = useState(false)

  const responseSuccessGoogle = (res) => {
    axios({
      method: 'POST',
      url: 'http://localhost:5000/auth/googlelogin',
      data: { tokenId: res.tokenId },
    })
    setSuccess(true)
  }

  const responseErrorGoogle = (res) => {
    console.error(`Error: ${res}`)
  }

  const responseFacebook = (res) => {
    axios({
      method: 'POST',
      url: 'http://localhost:5000/auth/facebooklogin',
      data: { accessToken: res.accessToken, userID: res.userID },
    })
    setSuccess(true)
  }

  return (
    <div className='sign'>
      <GoogleLogin
        clientId='392424671686-scb4q7rli42r1slmvrv0bp1ufhp3cch4.apps.googleusercontent.com'
        buttonText='Login with Google'
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={'single_host_origin'}
      />

      <FacebookLogin
        appId='3548389521876883'
        autoLoad={false}
        callback={responseFacebook}
      />

      {success && <Redirect to='/' />}
    </div>
  )
}

export default Header
