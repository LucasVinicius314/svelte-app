import type { Todo } from '../typescript/todo'
import { api } from '../services/axios'

export class TodoRepository {
  static all = async () => {
    const req = api.post<Todo[]>('/todo/all')

    const res = await req

    return res.data
  }

  static create = async () => {
    const req = api.post('/todo/create')

    await req
  }
}
