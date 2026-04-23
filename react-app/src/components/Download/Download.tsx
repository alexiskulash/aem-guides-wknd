import './Download.scss'

interface DownloadProps {
  url: string
  title: string
  description?: string
  size?: string
  format?: string
  className?: string
}

export default function Download({ url, title, description, size, format, className = '' }: DownloadProps) {
  return (
    <div className={`download ${className}`}>
      <div className="cmp-download">
        {description && (
          <div className="cmp-download__description">
            <p>{description}</p>
          </div>
        )}
        <div className="cmp-download__title">
          <a className="cmp-download__title-link" href={url}>{title}</a>
        </div>
        {(size || format) && (
          <dl className="cmp-download__properties">
            {format && (
              <div className="cmp-download__property">
                <dt className="cmp-download__property-label">Format</dt>
                <dd className="cmp-download__property-content">{format}</dd>
              </div>
            )}
            {size && (
              <div className="cmp-download__property">
                <dt className="cmp-download__property-label">Size</dt>
                <dd className="cmp-download__property-content">{size}</dd>
              </div>
            )}
          </dl>
        )}
        <a className="cmp-download__action" href={url} download>
          <span className="cmp-download__action-text">Download</span>
        </a>
      </div>
    </div>
  )
}
