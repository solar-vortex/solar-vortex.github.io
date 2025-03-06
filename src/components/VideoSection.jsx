"use client"

import { useState, useEffect, useRef } from "react"
import heatmapVideo from "../assets/Heatmap.mp4"
import bipvVideo from "../assets/BIPV.mp4"
import solarRoofVideo from "../assets/n3d.mp4"
import photorealistic3DVideo from "../assets/3dtiles.mp4"

function VideoSection() {
  const videos = [
    { id: 1, title: "Photorealistic 3D Tiles with Solar Panels", url: photorealistic3DVideo },
    { id: 2, title: "Solar Panels on the Roof of a Building", url: solarRoofVideo },
    { id: 3, title: "Heatmap Visualization of A City", url: heatmapVideo },
    { id: 4, title: "Calculating the BIPV Potential of a Building", url: bipvVideo },
    
  ]

  const [activeVideo, setActiveVideo] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load() // Start loading immediately
      videoRef.current.play().catch(() => console.warn("Autoplay blocked"))
    }

    // Preload the next video
    const nextVideoIndex = (activeVideo + 1) % videos.length
    const preloadedVideo = document.createElement("video")
    preloadedVideo.src = videos[nextVideoIndex].url
    preloadedVideo.preload = "auto"
  }, [activeVideo])

  return (
    <section className="video-section">
      <div className="video-container">
        <h2 className="video-section-title">Demo of Different Features Provided By the Project</h2>

        <div className="video-content">
          <div className="video-player">
            <video
              ref={videoRef}
              className="video-element"
              playsInline
              muted
              loop
              autoPlay
              preload="auto" // Forces video to load early
            >
              <source src={videos[activeVideo].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
