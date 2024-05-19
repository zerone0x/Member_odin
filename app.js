require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const authenticateUser = require('./middleware/authentication');

// Import all the routes from this module
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
// middleware 
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')


app.use(express.json())

// routes

app.get('/', (req, res) => {
  res.send('<h1>Member Only API</h1><a href="/">User route</a>');
});
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users',authenticateUser, userRouter )
// NOTE this route could be based URI, and the routes of `userRouter` will be appended to the URI

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}`))
  } catch (error) {
    console.error(error);
  }
}

start()