import './ProgressBar.scss'

interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  className?: string
}

export default function ProgressBar({ value, max = 100, label, className = '' }: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  return (
    <div className={`cmp-progressbar ${className}`}>
      {label && <span className="cmp-progressbar__label">{label}</span>}
      <div className="cmp-progressbar__track" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
        <div className="cmp-progressbar__fill" style={{ width: `${percentage}%` }} />
      </div>
      <span className="cmp-progressbar__value">{Math.round(percentage)}%</span>
    </div>
  )
}
