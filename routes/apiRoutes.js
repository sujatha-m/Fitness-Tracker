// Dependencies
// =============================================================
//Require express app
const express = require('express')
const router = express.Router()
//require models
const db = require('../models')

// Get all the workouts from the database
router.get('/api/workouts', (req, res, next) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .populate('exercises')
    .then(dbWorkout => res.status(201).json(dbWorkout))
    .catch(next)
})

// POST a new workout
// Create a new instance of workout Save it, then send the new workout back to the client
router.post('/api/workouts', (req, res, next) => {
  db.Workout.create(req.body)
    .then(dbWorkout => res.status(201).json(dbWorkout))
    .catch(next)
})

// Update the last workout by its id Find the workout with that id, push the new exercise into the exercises array
// If an empty exercise object is passed due to clicking "complete" after "add exercise",we handle null string case here to avoid exception
router.put('/api/workouts/:id', async (req, res, next) => {
  console.log(req.body.name)
  if (req.body.name !== '') {
    try {
      const exercise = new db.Exercise(req.body)
      exercise.save()
      const updatedWorkout = await db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: exercise._id } }
      )
      res.json(updatedWorkout)
    } catch (error) {
      next(error)
    }
  } else {
    res.json(null)
  }
})

// View Stats for all the workouts
router.get('/api/workouts/range', (req, res, next) => {
  db.Workout.find({})

    .populate('exercises')
    .exec((error, dbWorkout) => {
      if (error) {
        res.status(404).json(error)
      } else {
        res.status(201).json(dbWorkout)
      }
    })
})
//module exports router
module.exports = router
