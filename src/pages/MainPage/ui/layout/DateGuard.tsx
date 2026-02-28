import { Navigate, Outlet, useParams } from 'react-router-dom'

export const DateGuard = () => {
  const { date } = useParams()
  const ok = !!date && /^\d{4}-\d{2}-\d{2}$/.test(date)

  if (!ok) return <Navigate to="/" replace />
  return <Outlet />
}
