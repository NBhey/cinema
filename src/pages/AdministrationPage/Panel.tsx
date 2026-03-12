import { AuthGuard } from '@/features/AuthGuard/AuthGuard'
import { HallManagment } from '@/features/HallManagment/HallManagment'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const Panel = () => {
  return (
    <AuthGuard>
      <QueryClientProvider client={queryClient}>
        <HallManagment />
      </QueryClientProvider>
    </AuthGuard>
  )
}
