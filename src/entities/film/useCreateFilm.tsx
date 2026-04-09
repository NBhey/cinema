import { addFilm } from '@/shared/api/http'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateFilm = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (parametrs: {
      filmName: string
      filmDuration: number
      filmDescription: string
      filmOrigin: string
      filePoster: FileList
    }) => {
      return addFilm(parametrs)
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['halls'] }),
  })
}
