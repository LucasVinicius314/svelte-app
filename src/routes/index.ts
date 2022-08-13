import { Router } from 'express'
import { authRouter } from './auth'
import { errorHandler } from '../middleware/error'
import { postRouter } from './post'
import { userRouter } from './user'
import { validationHandler } from '../middleware/jwt'

export const router = Router()

// open routes

router.use('/user', authRouter)

// protected routes

router.use(validationHandler)

router.use('/user', userRouter)
router.use('/post', postRouter)

// error

router.use(errorHandler)
