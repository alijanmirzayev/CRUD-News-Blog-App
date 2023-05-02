import express from 'express'
import { userRoute } from './routes/user/user.route.js'

const app = express()

app.use(express.json())

// Routes
app.use('/api/v1/', userRoute)

app.listen(5050, () => {
    console.log('Server is up....')
})