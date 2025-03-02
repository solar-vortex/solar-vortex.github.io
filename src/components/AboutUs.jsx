function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          We are the SolarVortex team, passionate developers bringing innovative solutions to the web. 
          Our goal is to build interactive, high-performance, and visually stunning applications.
        </p>

        <div className="team">
          <div className="team-member">
            <h3 className="team-name">Atharva Garole</h3>
            <div className="social-links">
              <a href="https://github.com/GaroleAtharva" target="_blank" className="social-link">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/atharvagarole/" target="_blank" className="social-link">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>

          <div className="team-member">
            <h3 className="team-name">Sagar Singh</h3>
            <div className="social-links">
              <a href="https://github.com/Sagar9955" target="_blank" className="social-link">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/sagarasingh/" target="_blank" className="social-link">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>

          <div className="team-member">
            <h3 className="team-name">Prathmesh Badgujar</h3>
            <div className="social-links">
              <a href="https://github.com/pbword" target="_blank" className="social-link">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/prathameshbadgu/" target="_blank" className="social-link">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <p>&copy; 2025 SolarVortex</p>
      </footer>

      <style>{`
        .footer {
          text-align: center;
          padding: 10px;
          font-size: 16px;
          font-weight: bold;
          position: fixed;
          width: 100%;
          bottom: 0;
          color: white;
        }
      `}</style>
    </section>
  );
}

export default AboutUs;
