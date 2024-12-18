import express from 'express'
import { PrismaSessionStore } from '@quixo3/prisma-session-store'
import expressSession from 'express-session'
import cors from 'cors'
import prisma from './constants/config.js'
import usersRouter from './routes/users.js'
import citiesRouter from './routes/cities.js'
import placesRouter from './routes/places.js'
import favoritesRouter from './routes/favorites.js'

const app = express()
const PORT = process.env.PORT || 3000

// cors setup
app.use(
    cors({
        origin: [
            'http://localhost:5137',
            'http://localhost:5174',
            'http://localhost:5173',
            'https://eat-around-frontend.fly.dev',
        ],
        methods: ['POST', 'PUT', 'GET', 'OPTION', 'HEAD', 'DELETE', 'PATCH'],
        credentials: true,
    })
)

// session setup
app.use(
    expressSession({
        cookie: {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'None',
            maxAge: 360000,
            httpOnly: true,
        },
        secret: process.env.EXPRESS_SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        store: new PrismaSessionStore(prisma, {
            checkPeriod: 120000,
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined,
        }),
    })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', usersRouter)
app.use('/', citiesRouter)
app.use('/', placesRouter)
app.use('/', favoritesRouter)

app.get('/', (req, res) => {
    res.send('welcome to Eat Around API')
})

app.listen(PORT, '0.0.0.0', (err) => {
    if (err) console.log(err)
    console.log(`Server is running on port ${PORT}`)
})
