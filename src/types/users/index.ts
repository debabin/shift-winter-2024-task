export interface IUserData {
  success: boolean
  user: {
    _id: string
    phone: string
    firstname: string
    lastname: string
  }
  token: string
}

export interface IOtp {
  success: boolean
  reason: string
  retryDelay: number
}

export interface ISignIn {
  success: boolean
  user: {
    _id: string
    phone: string
  }
  token: string
}
