import type { Todo } from '../typescript/todo'
import { api } from '../services/axios'

export class TodoRepository {
  static all = async () => {
    const req = api.post<Todo[]>('/todo/all')

    const res = await req

    return res.data
  }

  static create = async ({
    content,
    title,
  }: {
    content: string
    title: string
  }) => {
    const req = api.post('/todo/create', {
      content: content,
      title: title,
    })

    await req
  }

  static delete = async ({ id }: { id: number }) => {
    const req = api.post('/todo/delete', {
      id: id,
    })

    await req
  }
}
