import { Router } from 'express'
import { authRouter } from './auth'
import { errorHandler } from '../middleware/error'
import { todoRouter } from './todo'
import { userRouter } from './user'
import { validationHandler } from '../middleware/jwt'

export const router = Router()

// open routes

router.use('/user', authRouter)

// protected routes

router.use(validationHandler)

router.use('/user', userRouter)
router.use('/todo', todoRouter)

// error

router.use(errorHandler)
