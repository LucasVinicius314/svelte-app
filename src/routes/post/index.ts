import { Model, col, fn, literal } from 'sequelize'

import { HttpException } from '../../exceptions/httpexception'
import { Models } from '../../services/sequelize'
import { Router } from 'express'
import { Models as _Models } from '../../typescript'
import { matches } from '../../utils/validation'

export const postRouter = Router()

postRouter.post('/all', async (req, res, next) => {
  try {
    const posts = await Models.Post.findAll({
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
      attributes: {
        include: [
          [fn('COUNT', col('likes.id')), 'likeCount'],
          [fn('COUNT', col('comments.id')), 'commentCount'],
          [
            literal(
              `(select count(*) from likes lk where lk.postId = post.id and lk.userId = ${req.user.id})`
            ),
            'liked',
          ],
        ],
      },
    })

    res.json(posts)
  } catch (error) {
    next(new HttpException(400, 'Invalid data'))
  }
})

postRouter.post('/create', async (req, res, next) => {
  const content = req.body.content

  try {
    matches(content, 'string', 'Invalid content', {
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
    await Models.Post.create<Model<_Models.Post, {}>>({
      content: content,
      userId: req.user.id,
    })

    res.json({
      message: 'Post created',
    })
  } catch (error) {
    next(new HttpException(400, 'Invalid data'))
  }
})
