import { UserCommonEntities } from './user'

declare global {
  namespace Express {
    interface Request {
      user: UserCommonEntities.UserAttributes
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT?: string
      DATABASE_URL: string
      SECRET: string
    }
  }
}
