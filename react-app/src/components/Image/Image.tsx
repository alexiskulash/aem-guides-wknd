import './Image.scss'

interface ImageProps {
  src: string
  alt?: string
  title?: string
  link?: string
  className?: string
}

export default function Image({ src, alt = '', title, link, className = '' }: ImageProps) {
  const img = (
    <img
      className="cmp-image__image"
      src={src}
      alt={alt}
    />
  )

  return (
    <div className={`cmp-image ${className}`}>
      {link ? (
        <a className="cmp-image__link" href={link}>
          {img}
        </a>
      ) : (
        img
      )}
      {title && <span className="cmp-image__title">{title}</span>}
    </div>
  )
}
