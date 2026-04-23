import './Sharing.scss'

interface SharingPlatform {
  name: 'facebook' | 'twitter' | 'instagram' | 'email' | string
  url: string
}

interface SharingProps {
  platforms: SharingPlatform[]
  className?: string
}

const ICON_MAP: Record<string, string> = {
  facebook: 'wkndicon-facebook',
  twitter: 'wkndicon-twitter',
  instagram: 'wkndicon-instagram',
  email: 'wkndicon-email',
  share: 'wkndicon-social-share',
}

export default function Sharing({ platforms, className = '' }: SharingProps) {
  return (
    <div className={`cmp-sharing ${className}`}>
      {platforms.map((platform, i) => (
        <a
          key={i}
          href={platform.url}
          className={`cmp-sharing__link cmp-sharing__link--${platform.name}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${platform.name}`}
        >
          <i className={`wknd__icon ${ICON_MAP[platform.name] || 'wkndicon-share'}`} aria-hidden="true" />
          <span className="cmp-sharing__label">{platform.name}</span>
        </a>
      ))}
    </div>
  )
}
