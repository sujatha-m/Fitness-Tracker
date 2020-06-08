const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')

// Create the Express app
const app = express()

// Assign Express global middleware
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// Open the database connection
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/custommethoddb',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  )



// Start listening for HTTP requests
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`))