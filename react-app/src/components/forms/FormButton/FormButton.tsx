import './FormButton.scss'

interface FormButtonProps {
  label: string
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export default function FormButton({ label, type = 'button', disabled = false, onClick, className = '' }: FormButtonProps) {
  return (
    <div className={`cmp-form-button ${className}`}>
      <button
        className="cmp-form-button__button"
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  )
}
