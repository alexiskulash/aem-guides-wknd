import './Button.scss'

interface ButtonProps {
  label: string
  link: string
  icon?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({ label, link, icon, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <div className={`cmp-button cmp-button--${variant} ${className}`}>
      <a className="cmp-button__link" href={link} role="button">
        {icon && <span className={`cmp-button__icon cmp-button__icon--${icon}`} aria-hidden="true" />}
        <span className="cmp-button__text">{label}</span>
      </a>
    </div>
  )
}
