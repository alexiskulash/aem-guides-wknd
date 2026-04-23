import { useState, useEffect, useRef } from 'react'
import './LanguageNavigation.scss'

interface LanguageItem {
  id: string
  title: string
  url: string
  lang: string
  active: boolean
  flagClass?: string
}

interface LanguageNavigationProps {
  items: LanguageItem[]
  className?: string
}

export default function LanguageNavigation({ items, className = '' }: LanguageNavigationProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const activeItem = items.find((i) => i.active) ?? items[0]

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className={`cmp-languagenavigation cmp-languagenavigation--header ${className}`}>
      <div className="cmp-languagenavigation--langnavtoggle">
        <button
          id="langNavToggleHeader"
          className={`cmp-languagenavigation__toggle${open ? ' open' : ''}`}
          aria-label={`Toggle Language ${activeItem?.lang}`}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {activeItem?.lang || 'EN'}
        </button>
      </div>

      {open && (
        <ul className="cmp-languagenavigation showMenu">
          {items.map((item) => (
            <li
              key={item.id}
              className={[
                'cmp-languagenavigation__item',
                'cmp-languagenavigation__item--level-0',
                item.active ? 'cmp-languagenavigation__item--active' : '',
              ].filter(Boolean).join(' ')}
            >
              <a
                className="cmp-languagenavigation__item-link"
                href={item.url}
                lang={item.lang}
                hrefLang={item.lang}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
