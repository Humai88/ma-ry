import { useState } from 'react'
import { url } from '../videos.js'

export const formatTime = (s) => {
  if (!Number.isFinite(s)) return ''
  const m = Math.floor(s / 60)
  const sec = String(Math.floor(s % 60)).padStart(2, '0')
  return `${m}:${sec}`
}

export default function VideoCard({ video, onPlay }) {
  const [duration, setDuration] = useState('')

  return (
    <button type="button" className="card" onClick={onPlay}>
      <div className="thumb">
        {video.thumb ? (
          <img src={url(video.thumb)} alt="" loading="lazy" />
        ) : (
          // No thumbnail image: show a frame from 1 second into the video.
          <video
            src={`${url(video.file)}#t=1`}
            preload="metadata"
            muted
            playsInline
            aria-hidden="true"
            tabIndex={-1}
            onLoadedMetadata={(e) => setDuration(formatTime(e.currentTarget.duration))}
          />
        )}
        <span className="play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" /></svg>
        </span>
        {duration && <span className="duration">{duration}</span>}
      </div>
      <span className="card-title">{video.title}</span>
      {video.episode && <span className="card-meta">{video.episode}</span>}
    </button>
  )
}
