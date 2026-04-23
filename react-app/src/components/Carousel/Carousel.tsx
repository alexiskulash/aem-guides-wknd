import { useState, useEffect, useRef } from 'react'
import './Carousel.scss'

interface CarouselItem {
  id: string
  content: React.ReactNode
}

interface CarouselProps {
  items: CarouselItem[]
  autoplay?: boolean
  autoplayDelay?: number
  className?: string
}

export default function Carousel({ items, autoplay = false, autoplayDelay = 5000, className = '' }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (index: number) => {
    setActiveIndex((index + items.length) % items.length)
  }

  useEffect(() => {
    if (!autoplay) return
    timerRef.current = setInterval(() => goTo(activeIndex + 1), autoplayDelay)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [autoplay, autoplayDelay, activeIndex, items.length])

  if (items.length === 0) return null

  return (
    <div className={`cmp-carousel ${className}`}>
      <div className="cmp-carousel__content">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`cmp-carousel__item${i === activeIndex ? ' cmp-carousel__item--active' : ''}`}
            role="group"
            aria-label={`Slide ${i + 1} of ${items.length}`}
          >
            {item.content}
          </div>
        ))}
      </div>

      <div className="cmp-carousel__actions">
        <button
          className="cmp-carousel__action cmp-carousel__action--previous"
          aria-label="Previous"
          onClick={() => goTo(activeIndex - 1)}
        >
          <span className="cmp-carousel__action-icon" aria-hidden="true" />
          <span className="cmp-carousel__action-text">Previous</span>
        </button>
        <button
          className="cmp-carousel__action cmp-carousel__action--next"
          aria-label="Next"
          onClick={() => goTo(activeIndex + 1)}
        >
          <span className="cmp-carousel__action-icon" aria-hidden="true" />
          <span className="cmp-carousel__action-text">Next</span>
        </button>
      </div>

      <ol className="cmp-carousel__indicators" aria-label="Slide indicators">
        {items.map((item, i) => (
          <li
            key={item.id}
            className={`cmp-carousel__indicator${i === activeIndex ? ' cmp-carousel__indicator--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </ol>
    </div>
  )
}
