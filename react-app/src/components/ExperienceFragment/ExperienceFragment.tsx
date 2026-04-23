import './ExperienceFragment.scss'

interface ExperienceFragmentProps {
  variant: 'header' | 'footer' | 'contributor' | string
  children?: React.ReactNode
  className?: string
}

export default function ExperienceFragment({ variant, children, className = '' }: ExperienceFragmentProps) {
  return (
    <div className={`experiencefragment cmp-experiencefragment--${variant} ${className}`}>
      {children}
    </div>
  )
}
