import './Logo.css';

function Logo(props) {
  return (
    <div className="logo" onClick={props.onClick}>
      <span className="logo-text">Together</span>
    </div>
  );
}

export default Logo;