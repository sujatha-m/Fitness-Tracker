const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const db = require('./models')


// Open the database connection
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  )

// Create the Express app
const app = express()

// Assign Express global middleware
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// Routes
// =============================================================
app.use(require('./routes/apiRoutes.js'))
app.use(require('./routes/htmlRoutes.js'))

// Start listening for HTTP requests
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`))