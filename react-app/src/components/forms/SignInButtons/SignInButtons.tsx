import './SignInButtons.scss'

interface SocialProvider {
  name: 'google' | 'facebook' | 'twitter' | string
  label: string
  url: string
}

interface SignInButtonsProps {
  providers?: SocialProvider[]
  modalUrl?: string
  className?: string
}

const defaultProviders: SocialProvider[] = [
  { name: 'google', label: 'Sign in with Google', url: '/auth/google' },
  { name: 'facebook', label: 'Sign in with Facebook', url: '/auth/facebook' },
]

const ICON_MAP: Record<string, string> = {
  google: 'wkndicon-google',
  facebook: 'wkndicon-facebook',
  twitter: 'wkndicon-twitter',
}

export default function SignInButtons({
  providers = defaultProviders,
  modalUrl,
  className = '',
}: SignInButtonsProps) {
  return (
    <div className={`wknd-sign-in-buttons ${className}`}>
      {modalUrl && (
        <a
          href="#sign-in"
          data-modal-url={modalUrl}
          className="wknd-sign-in-buttons__primary-btn"
          aria-label="Sign In"
        >
          <i className="wknd__icon wkndicon-user" aria-hidden="true" />
          <span className="wknd-sign-in-buttons__label">Sign In</span>
        </a>
      )}
      {providers.map((provider, i) => (
        <a
          key={i}
          href={provider.url}
          className={`wknd-sign-in-buttons__social-btn wknd-sign-in-buttons__social-btn--${provider.name}`}
          aria-label={provider.label}
        >
          <i className={`wknd__icon ${ICON_MAP[provider.name] || 'wkndicon-user'}`} aria-hidden="true" />
          <span className="wknd-sign-in-buttons__social-label">{provider.label}</span>
        </a>
      ))}
    </div>
  )
}
