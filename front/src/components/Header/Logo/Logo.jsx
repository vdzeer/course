import PropTypes from 'prop-types';
import './Logo.css';

function Logo({logoClick}) {
  return (
    <div className="logo" onClick={logoClick}>
      <span className="logo-text">Together</span>
    </div>
  );
}

Logo.propTypes = {
  logoClick: PropTypes.func.isRequired
}

export default Logo;