import PropTypes from 'prop-types';
import './Container.css';

function Container({handlerState}) {
  return (
    <div className="container">
      {handlerState}
    </div>
  );
}

Container.propTypes = {
  handlerState: PropTypes.element.isRequired,
}

export default Container;