 import logo from '../../assets/images/nav/logo.png'
const Navbar = () => {
  return <>

  
    <nav className="navbar navbar-expand-lg  m-4">
      <div className="container">
        {/* Logo Section */}
        
          <img
            src={logo} 
            alt="Rentcars"
            style={{ width: '116px', marginRight: '10px'  , height:'25.72px'}}
          />
     

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links and Buttons */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Centered Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#become-a-renter">
                Become a renter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#rental-deals">
                Rental deals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how-it-works">
                How it works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#why-choose-us">
                Why choose us
              </a>
            </li>
          </ul>

          {/* Right Aligned Section (Sign in and Sign up) */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#sign-in">
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a href="#sign-up" className="btn btn-primary px-4 ms-3">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
};

export default Navbar;
