import { useState, useEffect, useRef } from "react";
import image2 from "../assets/image2.jpg";

function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Create a new Image to preload the background
            const img = new Image();
            img.src = image2;
            img.onload = () => setImageLoaded(true);
            // Once loaded, no need to observe further
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Background image applied only after it has been preloaded */}
      <div
        className="hero-background"
        style={{
          backgroundImage: imageLoaded
            ? `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9)), url(${image2})`
            : "none",
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
