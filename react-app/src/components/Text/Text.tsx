import './Text.scss'

interface TextProps {
  content: string
  className?: string
}

export default function Text({ content, className = '' }: TextProps) {
  return (
    <div
      className={`cmp-text ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
