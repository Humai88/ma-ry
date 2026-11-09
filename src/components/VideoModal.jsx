import { useEffect, useRef } from 'react'
import { url } from '../videos.js'

export default function VideoModal({ video, onClose, onPrev, onNext, hasMany }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const d = dialogRef.current
    if (d && !d.open) d.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (!hasMany) return
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [hasMany, onPrev, onNext])

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-label={video.title}
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose() // click on the dark backdrop
      }}
    >
      <div className="modal-inner">
        <div className="modal-top">
          <div>
            <h3>{video.title}</h3>
            {video.episode && <p className="card-meta">{video.episode}</p>}
          </div>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close video">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <video
          key={video.file}
          className="player"
          src={url(video.file)}
          poster={video.thumb ? url(video.thumb) : undefined}
          controls
          autoPlay
          playsInline
          preload="auto"
        />

        {video.description && <p className="modal-desc">{video.description}</p>}

        {hasMany && (
          <div className="modal-nav">
            <button type="button" className="btn btn-ghost" onClick={onPrev}>← Previous</button>
            <button type="button" className="btn btn-ghost" onClick={onNext}>Next →</button>
          </div>
        )}
      </div>
    </dialog>
  )
}
