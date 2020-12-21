import './Logo.css';

function Logo({onClick}) {
  return (
    <div className="logo" onClick={onClick}>
      <span className="logo-text">Together</span>
    </div>
  );
}

export default Logo;