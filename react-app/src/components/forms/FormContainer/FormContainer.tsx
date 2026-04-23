interface FormContainerProps {
  children?: React.ReactNode
  className?: string
}

export default function FormContainer({ children, className = '' }: FormContainerProps) {
  return (
    <div className={`cmp-form-container ${className}`}>
      {children}
    </div>
  )
}
