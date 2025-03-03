"use client"

import overlay1 from "../assets/overlay1.png"
import overlay2 from "../assets/overlay2.gif"
import overlay3 from "../assets/bipv.gif"

function DataOverlays() {
  const overlayData = [
    {
      title: "Running Custom WebGL Shaders Using Deck.gl for Solar Potential Analysis",
      image: overlay1,
      link: "https://solar-vortex.github.io/blog/post/customshaders/", // Add the link here
    },
    {
      title: "3D Solar Rooftop Mapping with Google 3D Tiles, Deck.gl, and Three.js",
      image:overlay2,
      link: "https://solar-vortex.github.io/blog/post/blog3/",
    },
    {
      title: "Calculating BIPV Potential Using GHI, DNI, and Other Solar Parameters",
      image:overlay3,
      link: "https://solar-vortex.github.io/blog/post/blog3/",
    },
  ]

  return (
    <section className="overlays">
      <div className="overlays-container">
        <div className="overlays-header">
          <h2 className="overlays-title">
            Our Innovative Solutions That Pioneer Breakthroughs in Solar Potential Insights Analysis
          </h2>
          <p className="overlays-description">
            Explore the detailed blogs to discover our pioneering breakthroughs in Solar Energy Modeling
          </p>
        </div>

        <div className="overlays-grid">
          {overlayData.map((overlay, index) => (
            <a key={index} href={overlay.link} className="overlay-card-link">
            <div className="overlay-card">
              <div className="overlay-image-container">
                <img
                  src={overlay.image || "/placeholder.svg"}
                  alt={`${overlay.title} visualization`}
                  className="overlay-image"
                />
              </div>
              <h3 className="overlay-title">{overlay.title}</h3>
              <p className="overlay-description">{overlay.description}</p>
            </div>
          </a>
          
          ))}
        </div>
      </div>
    </section>
  )
}

export default DataOverlays
