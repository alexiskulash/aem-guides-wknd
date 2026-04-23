import './Separator.scss'

interface SeparatorProps {
  className?: string
}

export default function Separator({ className = '' }: SeparatorProps) {
  return (
    <div className={`cmp-separator ${className}`}>
      <hr className="cmp-separator__horizontal-rule" />
    </div>
  )
}
