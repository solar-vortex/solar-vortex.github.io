import logo from "../assets/logo.png"; // Import the logo

function Navbar() {
   // Function to scroll to the About Us section
   const scrollToAboutUs = () => {
    const aboutSection = document.getElementById("about-us-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
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
          <a className="nav-button" onClick={scrollToAboutUs}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
