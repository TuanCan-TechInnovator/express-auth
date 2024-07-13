import { Router, Request, Response } from 'express'

const usersRouter = Router()

usersRouter.get('/', (req: Request, res: Response) => {
    res.send('List of users')
})

export default usersRouter
