import './ContentFragment.scss'

interface ContentFragmentElement {
  name: string
  value: string | string[]
}

interface ContentFragmentProps {
  title?: string
  description?: string
  elements?: ContentFragmentElement[]
  variant?: string
  className?: string
}

export default function ContentFragment({ title, description, elements = [], variant, className = '' }: ContentFragmentProps) {
  return (
    <div className={`cmp-contentfragment ${variant ? `cmp-contentfragment--${variant}` : ''} ${className}`}>
      {title && <h2 className="cmp-contentfragment__title">{title}</h2>}
      {description && <p className="cmp-contentfragment__description">{description}</p>}
      {elements.map((el, i) => (
        <div key={i} className={`cmp-contentfragment__element cmp-contentfragment__element--${el.name}`}>
          <div className="cmp-contentfragment__element-value">
            {Array.isArray(el.value) ? (
              el.value.map((v, j) => (
                <div key={j} dangerouslySetInnerHTML={{ __html: v }} />
              ))
            ) : (
              <div dangerouslySetInnerHTML={{ __html: el.value }} />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
