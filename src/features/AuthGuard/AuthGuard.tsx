import { ENV } from '@/shared/config/env'
import { useEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const authData = localStorage.getItem('authToken') || '{}'

    const { login, password } = JSON.parse(authData as string)

    if (!(login === ENV.AUTH_LOGIN && password === ENV.AUTH_PASSWORD)) {
      navigate('/login')
    }
  }, [navigate])

  return <>{children}</>
}
