// Dependencies
// =============================================================

const express = require('express')
const router = express.Router()

const db = require('../models')

router.get('/api/workouts', (req, res, next) => {
  db.Workout.find({})
  .sort({ date: -1 })
  .populate('exercises')
  .then(dbWorkout => res.status(201).json(dbWorkout))
    .catch(next)
  // .exec((error, dbWorkout)=>{
  //   if (error) {
  //     res.status(404).json(error)
  // } else {
  //     res.status(201).json(dbWorkout)
  // }
  // })
})

  router.post('/api/workouts', (req, res, next) => {
    db.Workout.create(req.body)
      .then(dbWorkout => res.status(201).json(dbWorkout))
      .catch(next)
  })
    
  router.put("/api/workouts/:id", (req, res, next) => {
    const exercise = new db.Exercise(req.body);
    exercise.save();
  
    db.Workout.findOneAndUpdate(
      {  _id: req.params.id },
      { $push: { exercises: exercise._id } }
    )
    .then(dbWorkout => res.status(201).json(dbWorkout))
      .catch(next)
      
   });

  router.get("/api/workouts/range", (req, res,next) => {
    db.Workout.find({})
      
      .populate('exercises')
      .exec((error, dbWorkout)=>{
        if (error) {
          res.status(404).json(error)
      } else {
          res.status(201).json(dbWorkout)
      }
      })
  });

module.exports = router
