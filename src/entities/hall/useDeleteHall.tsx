import { deleteHall } from '@/shared/api/http'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useDeleteHall() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => {
      return deleteHall(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['halls'] })
    },
  })
}
