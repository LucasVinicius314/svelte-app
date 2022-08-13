declare global {
  namespace Express {
    interface Request {
      user: Models.User
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

export namespace Models {
  export type User = {
    id: number
    email: string
    password: string
    username: string
    updatedAt: Date
    createdAt: Date
  }

  export type Post = {
    id: number
    userId: number
    content: string
    updatedAt: Date
    createdAt: Date
  }
}
