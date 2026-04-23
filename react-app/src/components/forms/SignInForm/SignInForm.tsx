import { useState, useEffect } from 'react'
import FormText from '../FormText/FormText'
import FormButton from '../FormButton/FormButton'
import './SignInForm.scss'

interface SignInFormProps {
  actionUrl?: string
  onSubmit?: (username: string, password: string) => void
  className?: string
}

export default function SignInForm({ actionUrl, onSubmit, className = '' }: SignInFormProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('j_reason') === 'invalid_login') {
      setHasError(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(username, password)
    } else if (actionUrl) {
      const form = e.target as HTMLFormElement
      form.submit()
    }
  }

  if (!actionUrl && !onSubmit) return null

  return (
    <div className={`wknd-sign-in-form ${className}`}>
      <form
        id="wknd-sign-in-form"
        className="wknd-sign-in-form__form"
        method="POST"
        action={actionUrl}
        onSubmit={handleSubmit}
      >
        <FormText
          name="j_username"
          label="Username"
          type="text"
          required
          error={hasError}
          value={username}
          onChange={setUsername}
        />
        <FormText
          name="j_password"
          label="Password"
          type="password"
          required
          error={hasError}
          value={password}
          onChange={setPassword}
        />
        {hasError && (
          <p className="wknd-sign-in-form__error">Invalid username or password. Please try again.</p>
        )}
        <FormButton label="Sign In" type="submit" />
      </form>
    </div>
  )
}
