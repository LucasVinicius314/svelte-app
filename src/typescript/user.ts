import { Model, Optional } from 'sequelize/types'

export namespace UserCommonEntities {
  export type UserAttributes = {
    email: string
    password: string
    username: string

    id: number
    createdAt: Date
    updatedAt: Date
  }

  export type UserCreationAttributes = Optional<
    UserAttributes,
    'id' | 'createdAt' | 'updatedAt'
  >

  export type UserInstance = Model<UserAttributes, UserCreationAttributes> &
    UserAttributes
}
