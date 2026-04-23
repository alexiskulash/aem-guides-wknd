import './Container.scss'

interface ContainerProps {
  children?: React.ReactNode
  variant?: 'default' | 'fixed-width' | 'header' | 'footer' | 'utility'
  id?: string
  className?: string
}

export default function Container({ children, variant = 'default', id, className = '' }: ContainerProps) {
  return (
    <div
      id={id}
      className={[
        'cmp-container',
        `cmp-layoutcontainer--${variant}`,
        className,
      ].filter(Boolean).join(' ')}
    >
      <div className="aem-Grid">
        {children}
      </div>
    </div>
  )
}
