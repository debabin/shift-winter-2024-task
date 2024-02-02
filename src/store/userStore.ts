import { IUserData } from '@/types/users'
import { create } from 'zustand'

interface UserState {
  user: IUserData
  setUser: (user: IUserData) => void
}

const useUserStore = create<UserState>()(set => ({
  user: {
    success: false,
    user: {
      _id: '',
      phone: '',
      firstname: '',
      lastname: '',
    },
    token: '',
  },
  setUser: by => set(state => ({ user: by })),
}))

export default useUserStore
