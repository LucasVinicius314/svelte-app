import { DBEntities } from '../../services/sequelize'
import { HttpException } from '../../exceptions/httpexception'
import { Router } from 'express'
import { matches } from '../../utils/validation'
import { sha256 } from '../../utils/crypto'
import { sign } from '../../middleware/jwt'

export const userRouter = Router()

userRouter.post('/profile', async (req, res, next) => {
  const id = req.body.id

  try {
    const user = await DBEntities.User.findOne({
      attributes: {
        exclude: ['password', 'email'],
      },
      where: {
        id: id,
      },
    })

    res.json(user)
  } catch (error) {
    console.log(error)

    next(new HttpException(400, 'Invalid data'))
  }
})

userRouter.post('/validate', async (req, res, next) => {
  try {
    const user = await DBEntities.User.findOne({
      attributes: {
        exclude: ['password'],
      },
      where: {
        id: req.user.id,
      },
    })

    if (user === null) {
      throw 'User not found.'
    }

    res.setHeader('Access-Control-Expose-Headers', '*')
    res.setHeader('authorization', sign(user.get()))

    res.json(user)
  } catch (error) {
    console.log(error)

    next(new HttpException(400, 'Invalid data'))
  }
})

userRouter.post('/update', async (req, res, next) => {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password

  try {
    const user = await DBEntities.User.findOne({
      attributes: {
        exclude: ['password', 'email'],
      },
      where: {
        id: req.user.id,
      },
    })

    if (user === null) {
      throw 'User not found.'
    }

    const updateObject = {
      username: username,
      email: email,
    }

    matches(username, 'string', 'Invalid username')
    matches(email, 'string', 'Invalid email')

    if (password !== undefined) {
      matches(password, 'string', 'Invalid password')
      Object.assign(updateObject, { password: sha256(password) })
    }

    const updatedUser = await user.update(updateObject)

    res.setHeader('authorization', sign(updatedUser.get()))

    res.json(user)
  } catch (error) {
    console.log(error)

    next(new HttpException(400, 'Invalid data'))
  }
})
