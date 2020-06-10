const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise'
    }
  ]
},{
  toJSON: {
    virtuals: true,
  },
})

workoutSchema.virtual('totalDuration').get(function totalDuration() {
  return this.exercises.reduce((total, exercise) => total + exercise.duration, 0);
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout
