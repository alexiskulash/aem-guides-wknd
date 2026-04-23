import { useState } from 'react'
import './Navigation.scss'

interface NavItem {
  id: string
  title: string
  url: string
  level: number
  active: boolean
  children: NavItem[]
}

interface NavigationProps {
  items: NavItem[]
  logoUrl?: string
  logoText?: string
  className?: string
}

export default function Navigation({ items, logoUrl, logoText, className = '' }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const renderItems = (navItems: NavItem[], level = 1) => (
    <ul className="cmp-navigation__group">
      {navItems.map((item) => (
        <li
          key={item.id}
          className={[
            'cmp-navigation__item',
            `cmp-navigation__item--level-${level}`,
            item.active ? 'cmp-navigation__item--active' : '',
            item.children.length > 0 ? 'cmp-navigation__item--has-children' : '',
          ].filter(Boolean).join(' ')}
        >
          <a
            className="cmp-navigation__item-link"
            href={item.url}
            aria-current={item.active ? 'page' : undefined}
          >
            {item.title}
          </a>
          {item.children.length > 0 && renderItems(item.children, level + 1)}
        </li>
      ))}
    </ul>
  )

  return (
    <nav className={`cmp-navigation cmp-navigation--header ${className}`} aria-label="Main navigation">
      {/* Desktop nav */}
      <div className="cmp-navigation__desktop">
        {renderItems(items)}
      </div>

      {/* Mobile toggle */}
      <button
        id="toggleNav"
        className="cmp-navigation__mobile-toggle"
        aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
      >
        <i className="wknd__icon wkndicon-menu" aria-hidden="true" />
      </button>

      {/* Mobile nav */}
      {mobileOpen && (
        <div
          id="mobileNav"
          className={`cmp-navigation--mobile${mobileOpen ? ' navPanel-visible' : ''}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileOpen(false)
          }}
        >
          <nav className="cmp-navigation">
            {renderItems(items)}
          </nav>
        </div>
      )}
    </nav>
  )
}
