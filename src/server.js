import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import {connect} from './utils/db'
import itemRouter from './resources/item/item.router'

export const app = express()

app.disable('x-powered-by')

// Middleware
// Server level
app.use(cors())
app.use(json()) //req.body
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// mount it to a defined path
app.use('/api/item', itemRouter)

export const start = () => {
    app.listen(3000, ()=> {
        console.log('server is running on 3000')
    })
}
