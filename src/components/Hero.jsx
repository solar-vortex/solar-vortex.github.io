import { useEffect } from "react";
import image2 from "../assets/image2.jpg";

function Hero() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = image2;
    document.head.appendChild(link);

    // Cleanup when component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9)), url(${image2})`,
        }}
      />
      <div className="hero-content">
        <h1 className="hero-title">Unlock Your Building's Solar Advantage</h1>
        <p className="hero-description">
          Leverage state-of-the-art 3D visualizations and real-time accurate solar metrics to empower your energy decisions and boost sustainability
        </p>
      </div>
    </section>
  );
}

export default Hero;
