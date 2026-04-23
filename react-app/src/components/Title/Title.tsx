import './Title.scss'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TitleProps {
  text: string
  type?: HeadingLevel
  link?: string
  className?: string
}

export default function Title({ text, type = 'h2', link, className = '' }: TitleProps) {
  const Tag = type as keyof JSX.IntrinsicElements
  return (
    <div className={`cmp-title ${className}`}>
      <Tag className="cmp-title__text">
        {link ? (
          <a className="cmp-title__link" href={link}>{text}</a>
        ) : (
          text
        )}
      </Tag>
    </div>
  )
}
