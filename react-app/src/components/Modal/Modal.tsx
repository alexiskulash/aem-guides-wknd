import { useEffect, useRef } from 'react'
import './Modal.scss'

interface ModalProps {
  visible: boolean
  onClose: () => void
  children?: React.ReactNode
  className?: string
}

export default function Modal({ visible, onClose, children, className = '' }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!visible) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [visible, onClose])

  if (!visible) return null

  return (
    <div
      id="wknd-modal"
      className={`wknd-modal ${className}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
    >
      <div ref={modalRef} className="wknd-modal__content">
        <button
          className="wknd-modal__close"
          aria-label="Close"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}
