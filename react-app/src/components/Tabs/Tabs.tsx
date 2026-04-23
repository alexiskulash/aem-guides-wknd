import { useState } from 'react'
import './Tabs.scss'

interface TabItem {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  items: TabItem[]
  className?: string
}

export default function Tabs({ items, className = '' }: TabsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id)

  return (
    <div className={`cmp-tabs ${className}`}>
      <ol className="cmp-tabs__tablist" role="tablist">
        {items.map((item) => (
          <li key={item.id} role="presentation">
            <button
              id={`tab-${item.id}`}
              role="tab"
              aria-selected={activeId === item.id}
              aria-controls={`tabpanel-${item.id}`}
              className={`cmp-tabs__tab${activeId === item.id ? ' cmp-tabs__tab--active' : ''}`}
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ol>

      {items.map((item) => (
        <div
          key={item.id}
          id={`tabpanel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${item.id}`}
          className={`cmp-tabs__tabpanel${activeId === item.id ? ' cmp-tabs__tabpanel--active' : ''}`}
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}
