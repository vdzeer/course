import './Container.css';

function Container({handlerState}) {
  return (
    <div className="container">
      {handlerState}
    </div>
  );
}

export default Container;