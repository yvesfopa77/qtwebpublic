import React from "react"

interface VideoProps {
  videoSrcURL: string
  videoTitle: string
}

const Video = ({ videoSrcURL, videoTitle }: VideoProps) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      allowFullScreen
      height="450px"
      width="800px"
    />
  </div>
)
export default Video
