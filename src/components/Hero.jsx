import image2 from "../assets/b3.webp";

function Hero() {
  return (
    <section className="hero">
      {/* Ensure the image loads first by setting fetchpriority="high" */}
      <img
        src={image2}
        alt="Building with solar advantage"
        className="hero-background"
        fetchpriority="high"
        decoding="async"
        loading="eager"
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
