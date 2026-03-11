import { ENV } from '@/shared/config/env'
import { ReactElement, FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// TODO не забыть поменять что будет в пропсах чилдреном

export const AuthGuard = ({ children }: { children: FC | ReactElement }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const authData = localStorage.getItem('authToken')
    if (typeof authData === 'string') {
      const { login, password } = JSON.parse(authData)

      if (!(login === ENV.AUTH_LOGIN && password === ENV.AUTH_PASSWORD)) {
        navigate('/login')
      }
    }
  }, [navigate])

  return <>{children}</>
}
