import { Model, Optional } from 'sequelize/types'

export namespace TodoCommonEntities {
  export type TodoAttributes = {
    completed: boolean
    content: string
    title: string

    userId: number

    id: number
    createdAt: Date
    updatedAt: Date
  }

  export type TodoCreationAttributes = Optional<
    TodoAttributes,
    'id' | 'createdAt' | 'updatedAt'
  >

  export type TodoInstance = Model<TodoAttributes, TodoCreationAttributes> &
    TodoAttributes
}
