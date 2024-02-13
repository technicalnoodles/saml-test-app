import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const loggedIn = useSelector((state) => state.auth);

  const renderLogin = () => {
    switch (loggedIn) {
      case null:
        return (
          <a className="header-item" href="/auth/cisco">
            <span className="half-margin-right">Login</span>
            <span className="icon-sign-in icon-size-20"></span>
          </a>
        );
      case false:
        return (
          <a className="header-item" href="/auth/cisco">
            <span className="half-margin-right">Login</span>
            <span className="icon-sign-in icon-size-20"></span>
          </a>
        );
      default:
        return (
          <a className="header-item" href="/api/logout">
            <span className="half-margin-right">Logout</span>
            <span className="icon-sign-in icon-size-20"></span>
          </a>
        );
    }
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header-panels">
          <div className="header-panel">
            <a className="header__logo" href="/">
              <span className="icon-cisco"></span>
            </a>
            <div className="header__title">DEVWKS-2122</div>
          </div>
          <div className="header-panel header-panel--center">
            <div className="header-item">
              <ul id="tabsheader" className="tabs">
                {loggedIn && (
                  <li id="tabsheader-1" className="tab active">
                    <Link to={'/events'}>
                      <div className="tab__heading">Active Events</div>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="header-panel header-panel--right">
            {renderLogin()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
