declare global {
  namespace Express {
    interface Request {
      user: ModelTypes.User
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

export namespace ModelTypes {
  export type User = {
    id: number
    email: string
    password: string
    username: string
    updatedAt: Date
    createdAt: Date
  }

  export type Todo = {
    id: number
    userId: number
    completed: boolean
    content: string
    title: string
    updatedAt: Date
    createdAt: Date
  }
}
