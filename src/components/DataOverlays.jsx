"use client"

import overlay1 from "../assets/overlay1.png"

function DataOverlays() {
  const overlayData = [
    {
      title: "Running Custom WebGL Shaders Using Deck.gl for Solar Potential Analysis",
      image: overlay1,
      link: "https://solar-vortex.github.io/blog/post/customshaders/", // Add the link here
    },
    {
      title: "Monthly Flux",
      description: "Monthly amount of solar energy. Drill down to specific month.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-12%2013-38-57-iYNyL9Dzy4TNLLyNITj3RxKKfCaiDm.png",
      link: "/blogs/monthly-flux",
    },
    {
      title: "Hourly Shade",
      description: "Hourly shade cover. Drill down to specific hour of the day on any day.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-12%2013-39-15-DfMDLYwJDXYwoVYrvPr9TpyHwg2iIH.png",
      link: "/blogs/hourly-shade",
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
