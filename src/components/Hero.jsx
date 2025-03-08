import image2 from "../assets/b3.webp";

function Hero() {
  return (
    <section className="hero">
      {/* Apply background image dynamically */}
      <div
        className="hero-background" fetchpriority="high" rel="preload"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9)), url(${image2})`,
        }}
      />
      <div className="hero-content">
        <h1 className="hero-title">Unlock Your Building's Solar Advantage</h1>
        <p className="hero-description">
          Leverage state-of-the-art 3D visualizations and real-time accurate solar metrics to empower your energy decisions and boost sustainability.
        </p>
      </div>
    </section>
  );
}

export default Hero;
