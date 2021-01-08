import PropTypes from 'prop-types';
import './Logo.css';

function Logo({onClick}) {
  return (
    <div className="logo" onClick={onClick}>
      <span className="logo-text">Together</span>
    </div>
  );
}

Logo.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Logo;