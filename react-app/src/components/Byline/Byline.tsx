import './Byline.scss'

interface BylineProps {
  name: string
  occupations: string[]
  imageSrc?: string
  imageAlt?: string
  className?: string
}

export default function Byline({ name, occupations, imageSrc, imageAlt, className = '' }: BylineProps) {
  if (!name && occupations.length === 0) return null

  return (
    <div className={`cmp-byline ${className}`}>
      {imageSrc && (
        <div className="cmp-byline__image">
          <div className="cmp-image">
            <img className="cmp-image__image" src={imageSrc} alt={imageAlt || name} />
          </div>
        </div>
      )}
      <h2 className="cmp-byline__name">{name}</h2>
      <p className="cmp-byline__occupations">{occupations.join(', ')}</p>
    </div>
  )
}
