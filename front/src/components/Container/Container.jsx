import PropTypes from 'prop-types';
import './Container.css';

function Container({handlerState}) {
  return (
    <div className="container">
      {handlerState}
    </div>
  );
}

const imgType = PropTypes.shape({
  fileId: PropTypes.number.isRequired,
  file: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
  })
});

const likeType = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  user: PropTypes.shape({id: PropTypes.number.isRequired}),
  date: PropTypes.string.isRequired
});

const articleType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(imgType),
  createdAt: PropTypes.string.isRequired,
  editedAt: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(likeType)
});

const userDataType = PropTypes.shape({
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  avatar: imgType,
  friends: PropTypes.arrayOf(userDataType),
  articles: PropTypes.arrayOf(articleType)
});

Container.propTypes = {
  handlerState: PropTypes.element.isRequired,
  userData: userDataType
}

export default Container;