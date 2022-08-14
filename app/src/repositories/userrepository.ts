import type { User } from '../typescript/user'
import { api } from '../services/axios'

export class UserRepository {
  static register = async ({
    email,
    passord,
    username,
  }: {
    email: string
    passord: string
    username: string
  }) => {
    const req = api.post<User>('/user/register', {
      email: email,
      password: passord,
      username: username,
    })

    const res = await req

    return res.data
  }

  static login = async ({
    email,
    passord,
  }: {
    email: string
    passord: string
  }) => {
    const req = api.post<User>('/user/login', {
      email: email,
      password: passord,
    })

    const res = await req

    return res.data
  }

  static validate = async () => {
    const req = api.post<User>('/user/validate')

    const res = await req

    return res.data
  }
}
