import { GridSession } from '@/features/admin/ui/GridSession/GridSession'
import { AuthGuard } from '@/features/AuthGuard/AuthGuard'
import { ConfigurateHall } from '@/features/ConfigurateHall/ConfigurateHall'
import { HallManagment } from '@/features/HallManagment/HallManagment'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const Panel = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthGuard>
        <HallManagment />
        <ConfigurateHall />
        <GridSession />
      </AuthGuard>
    </QueryClientProvider>
  )
}
