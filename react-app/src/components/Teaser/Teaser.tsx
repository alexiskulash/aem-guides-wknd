import './Teaser.scss'

interface TeaserAction {
  label: string
  link: string
}

interface TeaserProps {
  imageSrc?: string
  imageAlt?: string
  pretitle?: string
  title: string
  titleLink?: string
  description?: string
  actions?: TeaserAction[]
  variant?: 'default' | 'hero' | 'card' | 'featured' | 'list' | 'secure'
  className?: string
}

export default function Teaser({
  imageSrc,
  imageAlt = '',
  pretitle,
  title,
  titleLink,
  description,
  actions = [],
  variant = 'default',
  className = '',
}: TeaserProps) {
  return (
    <div className={`cmp-teaser cmp-teaser--${variant} ${className}`}>
      {imageSrc && (
        <div className="cmp-teaser__image">
          <img className="cmp-image__image" src={imageSrc} alt={imageAlt} />
        </div>
      )}
      <div className="cmp-teaser__content">
        {pretitle && <p className="cmp-teaser__pretitle">{pretitle}</p>}
        <h2 className="cmp-teaser__title">
          {titleLink ? (
            <a className="cmp-teaser__title-link" href={titleLink}>{title}</a>
          ) : (
            title
          )}
        </h2>
        {description && (
          <div
            className="cmp-teaser__description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {actions.length > 0 && (
          <div className="cmp-teaser__action-container">
            {actions.map((action, i) => (
              <a key={i} className="cmp-teaser__action-link" href={action.link}>
                {action.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
