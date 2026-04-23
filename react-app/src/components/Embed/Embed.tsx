import './Embed.scss'

interface EmbedProps {
  url?: string
  html?: string
  title?: string
  className?: string
}

export default function Embed({ url, html, title, className = '' }: EmbedProps) {
  return (
    <div className={`cmp-embed ${className}`}>
      {html ? (
        <div className="cmp-embed__embeddable" dangerouslySetInnerHTML={{ __html: html }} />
      ) : url ? (
        <div className="cmp-embed__embeddable">
          <iframe
            className="cmp-embed__iframe"
            src={url}
            title={title || 'Embedded content'}
            allowFullScreen
            loading="lazy"
          />
        </div>
      ) : null}
    </div>
  )
}
