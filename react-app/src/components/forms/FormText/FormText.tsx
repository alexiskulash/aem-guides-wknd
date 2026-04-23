import './FormText.scss'

interface FormTextProps {
  name: string
  label: string
  type?: 'text' | 'password' | 'email' | 'number' | 'tel'
  placeholder?: string
  required?: boolean
  error?: boolean
  value?: string
  onChange?: (value: string) => void
  className?: string
}

export default function FormText({
  name,
  label,
  type = 'text',
  placeholder,
  required = false,
  error = false,
  value,
  onChange,
  className = '',
}: FormTextProps) {
  return (
    <div className={`cmp-form-text ${className}`}>
      <label className="cmp-form-text__label" htmlFor={`form-text-${name}`}>
        {label}
        {required && <span className="cmp-form-text__required" aria-hidden="true"> *</span>}
      </label>
      <input
        id={`form-text-${name}`}
        className={`cmp-form-text__text${error ? ' cmp-form-text__text--error' : ''}`}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        aria-invalid={error}
        aria-required={required}
      />
    </div>
  )
}
