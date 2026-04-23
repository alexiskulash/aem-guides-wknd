import './Breadcrumb.scss'

interface BreadcrumbItem {
  title: string
  url: string
  active?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`cmp-breadcrumb ${className}`} aria-label="Breadcrumb">
      <ol className="cmp-breadcrumb__list">
        {items.map((item, i) => (
          <li
            key={i}
            className={`cmp-breadcrumb__item${item.active ? ' cmp-breadcrumb__item--active' : ''}`}
          >
            {item.active ? (
              <span className="cmp-breadcrumb__item-link">{item.title}</span>
            ) : (
              <a className="cmp-breadcrumb__item-link" href={item.url}>{item.title}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
