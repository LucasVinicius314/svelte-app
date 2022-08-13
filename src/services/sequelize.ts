import * as dotenv from 'dotenv'

import { DataTypes, Sequelize } from 'sequelize'

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

const User = sequelize.define('user', {
  email: DataTypes.STRING,
  password: DataTypes.STRING(256),
  username: DataTypes.STRING,
})

const Todo = sequelize.define('todo', {
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

export const Models = {
  User,
  Todo,
}
