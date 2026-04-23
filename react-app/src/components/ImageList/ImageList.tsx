import './ImageList.scss'

interface ImageListItem {
  id: string
  imageSrc: string
  imageAlt?: string
  title: string
  description?: string
  url?: string
}

interface ImageListProps {
  items: ImageListItem[]
  className?: string
}

export default function ImageList({ items, className = '' }: ImageListProps) {
  return (
    <ul className={`cmp-image-list ${className}`}>
      {items.map((item) => (
        <li key={item.id} className="cmp-image-list__item">
          {item.url ? (
            <a href={item.url} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img className="cmp-image__image" src={item.imageSrc} alt={item.imageAlt || item.title} />
              <span className="cmp-image-list__item-title">{item.title}</span>
              {item.description && (
                <span className="cmp-image-list__item-description">{item.description}</span>
              )}
            </a>
          ) : (
            <>
              <img className="cmp-image__image" src={item.imageSrc} alt={item.imageAlt || item.title} />
              <span className="cmp-image-list__item-title">{item.title}</span>
              {item.description && (
                <span className="cmp-image-list__item-description">{item.description}</span>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  )
}
