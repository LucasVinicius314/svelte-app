import * as cors from 'cors'
import * as dotenv from 'dotenv'
import * as express from 'express'
import * as http from 'http'

import { json, urlencoded } from 'body-parser'

import { router } from './routes'
import { sequelize } from './services/sequelize'

dotenv.config()

const setup = async () => {
  await sequelize
    .authenticate()
    .then(() => console.log('Database auth ok'))
    .catch(console.log)

  await sequelize
    .sync({ alter: true, force: false, logging: false })
    .then(() => console.log('Database sync ok'))
    .catch(console.log)

  const app = express()

  app.use(cors())
  app.use(json())
  app.use(urlencoded({ extended: true }))
  app.use('/api/', router)
  app.use(express.static('app/public'))

  const server = http.createServer(app)

  server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
  })
}

setup()
