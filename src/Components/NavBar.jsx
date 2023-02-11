import logo from '../Assets/logo.png'

const NavBar = () => {
    return (
    <nav
    className="navbar navbar-expand-lg navbar-dark"
    style={{backgroundColor: '#221f1f'}}>
        <a className="navbar-brand" href="#">
            <img src={logo} style={{width: 100 + 'px', height: 55 + 'px'}} alt="logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">
                        Home <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link font-weight-bold" href="#">TV Shows</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">Movies</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">Recently Added</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">My List</a>
                </li>
            </ul>
            <i className="fa fa-search icons"></i>
            <div id="kids">KIDS</div>
            <i className="fa fa-bell icons"></i>
            <i className="fa fa-user icons"></i>
        </div>
    </nav>
    )
}

export default NavBar