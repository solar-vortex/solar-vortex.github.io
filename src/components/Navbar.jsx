import logo from "../assets/logo.png"; // Import the logo

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="/" className="logo-link">
            <img src={logo} alt="SolarVortex Logo" className="logo" /> 
            <span className="logo-text">SolarVortex</span>
          </a>
        </div>
        <div className="navbar-right">
          <a href="https://solar-vortex.github.io/blog/" className="nav-button">
            Blog
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=solarvortex589@gmail.com" target="_blank" className="nav-button">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
