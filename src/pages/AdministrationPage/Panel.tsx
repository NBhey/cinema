import { AuthGuard } from '@/features/AuthGuard/AuthGuard'

export const Panel = () => {
  return <AuthGuard>{<div></div>}</AuthGuard>
}
