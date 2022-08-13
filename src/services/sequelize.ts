import * as dotenv from 'dotenv'

import { DataTypes, Sequelize } from 'sequelize'

import { TodoCommonEntities } from '../typescript/todo'
import { UserCommonEntities } from '../typescript/user'

dotenv.config()

const databaseUrl = process.env.DATABASE_URL ?? ''

export const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  ssl: true,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
})

const baseAttributes = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
}

const User = sequelize.define<UserCommonEntities.UserInstance>('user', {
  ...baseAttributes,
  email: DataTypes.STRING,
  password: DataTypes.STRING(256),
  username: DataTypes.STRING,
})

const Todo = sequelize.define<TodoCommonEntities.TodoInstance>('todo', {
  ...baseAttributes,
  completed: DataTypes.BOOLEAN,
  content: DataTypes.TEXT,
  title: DataTypes.TEXT,

  userId: DataTypes.INTEGER,
})

User.prototype.toJSON = function () {
  let values = Object.assign({}, this.get())
  delete values.password
  return values
}

// User -> Todo

User.hasMany(Todo, { foreignKey: 'userId' })
Todo.belongsTo(User, { foreignKey: 'userId' })

export const DBEntities = {
  User,
  Todo,
}
