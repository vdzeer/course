import GoogleLogin from 'react-google-login'
import axios from 'axios'
import './Sign.css'

function Header() {
  const responseSuccessGoogle = (res) => {
    console.log(res)
    axios({
      method: 'POST',
      url: 'http://localhost:3000/auth/googlelogin/',
      data: { tokenId: res.tokenId },
    }).then((res) => {
      console.log(res)
    })
  }
  const responseErrorGoogle = (res) => {}

  return (
    <div className='sign'>
      <GoogleLogin
        clientId='392424671686-scb4q7rli42r1slmvrv0bp1ufhp3cch4.apps.googleusercontent.com'
        buttonText='Login with Google'
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default Header
