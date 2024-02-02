'use client'

import { useQuery } from '@tanstack/react-query'
import { getScheldue } from '../api/filmsApi'

export const useScheldue = (id: string) => {
  return useQuery({
    queryKey: ['scheldue'],
    queryFn: () => getScheldue(id),
    staleTime: 100000000000,
  })
}
