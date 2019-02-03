import { Router } from 'express'
// import controllers from './item.controllers'

const controllers = (req, res) => {
  res.send({ message: 'hello' })
  // res.status(200).json({message: 'hello'})
}

const router = Router()

// /api/item
router
  .route('/')
  .get(controllers)
  .post(controllers)

// /api/item/:id
router
  .route('/:id')
  .put(controllers)
  .delete(controllers)
  .get(controllers)

export default router
