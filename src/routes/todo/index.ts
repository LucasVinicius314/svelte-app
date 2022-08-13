import { Model, col, fn, literal } from 'sequelize'

import { HttpException } from '../../exceptions/httpexception'
import { ModelTypes } from '../../typescript'
import { Models } from '../../services/sequelize'
import { Router } from 'express'
import { matches } from '../../utils/validation'

export const todoRouter = Router()

todoRouter.post('/all', async (req, res, next) => {
  try {
    const todos = await Models.Todo.findAll({
      group: 'id',
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Models.User,
          attributes: {
            exclude: ['password', 'email'],
          },
        },
      ],
    })

    res.json(todos)
  } catch (error) {
    next(new HttpException(400, 'Invalid data'))
  }
})

todoRouter.post('/create', async (req, res, next) => {
  const content = req.body.content
  const title = req.body.title

  try {
    matches(content, 'string', 'Invalid content', {
      minLength: 1,
      maxLength: 200,
    })

    matches(title, 'string', 'Invalid content', {
      minLength: 1,
      maxLength: 200,
    })
  } catch (error) {
    let message = 'unknown'

    if (error instanceof Error) {
      message = error.message
    } else if (typeof error === 'string') {
      message = error
    }

    return void next(new HttpException(400, message))
  }

  try {
    await Models.Todo.create<Model<ModelTypes.Todo, {}>>({
      content: content,

      userId: req.user.id,
    })

    res.json({
      message: 'Todo created',
    })
  } catch (error) {
    next(new HttpException(400, 'Invalid data'))
  }
})
