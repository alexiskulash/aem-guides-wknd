import { useState } from 'react'
import './Accordion.scss'

interface AccordionItem {
  id: string
  title: string
  content: string | React.ReactNode
  expanded?: boolean
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set(items.filter((i) => i.expanded).map((i) => i.id))
  )

  const toggle = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className={`cmp-accordion ${className}`}>
      {items.map((item) => {
        const isExpanded = expandedIds.has(item.id)
        return (
          <div key={item.id} className="cmp-accordion__item">
            <h3 className="cmp-accordion__header">
              <button
                id={`accordion-button-${item.id}`}
                className={`cmp-accordion__button${isExpanded ? ' cmp-accordion__button--expanded' : ''}`}
                aria-expanded={isExpanded}
                aria-controls={`accordion-panel-${item.id}`}
                onClick={() => toggle(item.id)}
              >
                <span className="cmp-accordion__title">{item.title}</span>
                <span className="cmp-accordion__icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-button-${item.id}`}
              className={`cmp-accordion__panel${isExpanded ? ' cmp-accordion__panel--expanded' : ' cmp-accordion__panel--hidden'}`}
            >
              {typeof item.content === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              ) : (
                item.content
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
