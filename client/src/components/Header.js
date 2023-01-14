const Header = () => {
    return (
<header className="header">
    <div className="container">
        <div className="header-panels">
            <div className="header-panel">
                <a className="header__logo" href="http://www.cisco.com">
                    <span className="icon-cisco"></span>
                </a>
                <div className="header__title">DEVWKS-2122</div>
            </div>
            <div className="header-panel header-panel--center">
                <div className="header-item">
                    <ul id="tabsheader" className="tabs">
                        <li id="tabsheader-1" className="tab active">
                            <a tabindex="0">
                                <div className="tab__heading">Active Events</div>
                            </a>
                                </li>
                        {/* <li id="tabsheader-2" className="tab">
                            <a tabindex="0">
                                <div className="tab__heading">Resolved Events</div>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className="header-panel header-panel--right">
                <a className="header-item" href='/login'>
                    <span className="half-margin-right">Log In</span>
                    <span className="icon-sign-in icon-size-20"></span>
                </a>
            </div>
        </div>
    </div>
</header>
    )
}

export default Header;