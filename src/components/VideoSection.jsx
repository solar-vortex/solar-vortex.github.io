"use client"

import { useState, useEffect, useRef } from "react"
import heatmapVideo from "../assets/Heatmap.mp4"
import bipvVideo from "../assets/BIPV.mp4"
import solarRoofVideo from "../assets/2023-10-2921-57-25-Ezgif.Com-Video-Speed.mp4"
import photorealistic3DVideo from "../assets/2023-10-2922-21-37-Ezgif.Com-Video-Speed.mp4"

function VideoSection() {
  const videos = [
    {
      id: 1,
      title: "Heatmap Visualization of Ahmedabad City",
      url: heatmapVideo,
      type: "mp4",
    },
    {
      id: 2,
      title: "Calculating the BIPV Potential of a Building",
      url: bipvVideo,
      type: "mp4",
    },
    {
      id: 3,
      title: "Visualizing the Solar Panels on the roof of a Building",
      url: solarRoofVideo,
      type: "mp4",
    },
    {
      id: 4,
      title: "Visualizing the Solar Panels on the roof of a Building Using Photorealistic 3-D Tiles",
      url: photorealistic3DVideo,
      type: "mp4",
    },
  ]

  const [activeVideo, setActiveVideo] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play()
    }
  }, [activeVideo])

  return (
    <section className="video-section">
      <div className="video-container">
        <h2 className="video-section-title">Demo of Different Features Provided By the Project</h2>
        
        <div className="video-content">
          <div className="video-player">
            {videos[activeVideo].type === "mp4" ? (
              <video ref={videoRef} autoPlay loop muted playsInline className="video-element">
                <source src={videos[activeVideo].url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe
                src={`${videos[activeVideo].url}?autoplay=1&loop=1&playlist=${videos[activeVideo].url}`} 
                title={videos[activeVideo].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div className="video-playlist">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`video-item ${index === activeVideo ? "active" : ""}`}
                onClick={() => setActiveVideo(index)}
              >
                <h3 className="video-item-title">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
