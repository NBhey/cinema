import { deleteFilm } from '@/shared/api/http'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteFilm = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (filmId: string | number) => deleteFilm(filmId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['halls'] }),
  })
}
