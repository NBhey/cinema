import { createHall } from '@/shared/api/http'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateHall = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (hallName: string) => {
      return createHall({ hallName })
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['halls'] }),
  })
}
