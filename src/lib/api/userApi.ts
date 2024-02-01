import { ISignIn, IUserData } from '@/types/users'
import instance from './instance'

export const getUser = async (): Promise<IUserData> => {
  const res = await instance.get('cinema/today')
  return res.data
}

interface ICreateOtp {
  success: boolean
  retryDelay: number
}

export const createOtp = async (phone: string): Promise<ICreateOtp> => {
  const res = await instance.post('auth/otp', {
    phone,
  })
  return res.data
}

export const login = async (phone: string, code: string): Promise<ISignIn> => {
  const res = await instance.post('users/signin', {
    phone,
    code,
  })
  return res.data
}
export const authSession = async (token: string): Promise<IUserData> => {
  const res = await instance.get('users/session', {
    headers: { Authorization: 'bearer ' + token },
  })
  return res.data
}

export const updateUser = async (user: IUserData): Promise<ISignIn> => {
  const data = { ...user }
  delete data.success
  delete data.token
  delete data.user._id
  const res = await instance.patch(
    'users/profile',
    {
      ...user,
    },
    {
      headers: { Authorization: 'bearer ' + user.token },
    },
  )
  return res.data
}
