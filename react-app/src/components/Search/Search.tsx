import { useState, useRef } from 'react'
import './Search.scss'

interface SearchProps {
  onSearch: (query: string) => void
  placeholder?: string
  className?: string
}

export default function Search({ onSearch, placeholder = 'Search...', className = '' }: SearchProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) onSearch(query.trim())
  }

  const handleClear = () => {
    setQuery('')
    inputRef.current?.focus()
  }

  return (
    <div className={`cmp-search ${className}`}>
      <form className="cmp-search__form" role="search" onSubmit={handleSubmit}>
        <div className="cmp-search__field">
          <span className="cmp-search__icon" aria-hidden="true" />
          <input
            ref={inputRef}
            className="cmp-search__input"
            type="search"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search"
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              className="cmp-search__clear"
              aria-label="Clear search"
              onClick={handleClear}
              style={{ display: 'block' }}
            >
              <span className="cmp-search__clear-icon" aria-hidden="true" />
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
