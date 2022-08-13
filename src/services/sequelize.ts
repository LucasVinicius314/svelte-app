import * as dotenv from 'dotenv'

import { DataTypes, Sequelize } from 'sequelize'

dotenv.config()

const databaseUrl = process.env.DATABASE_URL ?? ''

export const sequelize = new Sequelize(databaseUrl, { dialect: 'postgres' })

const User = sequelize.define('user', {
  coverPicture: {
    type: DataTypes.STRING,
    defaultValue: 'default-cover',
    allowNull: false,
  },
  email: DataTypes.STRING,
  password: DataTypes.STRING(256),
  profilePicture: {
    type: DataTypes.STRING,
    defaultValue: 'default-user',
    allowNull: false,
  },
  username: DataTypes.STRING,
})

const Post = sequelize.define('post', {
  content: DataTypes.TEXT,
  userId: DataTypes.INTEGER,
})

User.prototype.toJSON = function () {
  let values = Object.assign({}, this.get())
  delete values.password
  return values
}

// User -> post

User.hasMany(Post, { foreignKey: 'userId' })
Post.belongsTo(User, { foreignKey: 'userId' })

export const Models = {
  User,
  Post,
}
