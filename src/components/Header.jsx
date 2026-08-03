import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/tasks" className="header-title">
        Task Manager
      </Link>
    </header>
  );
}

export default Header;
