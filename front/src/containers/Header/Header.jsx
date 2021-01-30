import PropTypes from 'prop-types'

import './Header.css'
import Logo from '../../components/Header/Logo/Logo'
import AddArticleBtn from '../../components/Header/AddArticleBtn/AddArticleBtn'
import User from '../../components/Header/User/User'
import { Link } from 'react-router-dom'
function Header({ username }) {
  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Logo />
      </Link>
      <Link to='/addArticle' style={{ textDecoration: 'none' }}>
        <AddArticleBtn />
      </Link>
      <User username={username} />
    </div>
  )
}

Header.propTypes = {
  username: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  }),
}

export default Header
