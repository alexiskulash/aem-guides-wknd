import './List.scss'

interface ListItem {
  title: string
  url: string
  date?: string
  description?: string
}

interface ListProps {
  items: ListItem[]
  showDate?: boolean
  className?: string
}

export default function List({ items, showDate = true, className = '' }: ListProps) {
  return (
    <ul className={`cmp-list ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="cmp-list__item">
          <a className="cmp-list__item-link" href={item.url}>
            <span className="cmp-list__item-title">{item.title}</span>
            {showDate && item.date && (
              <span className="cmp-list__item-date">{item.date}</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  )
}
