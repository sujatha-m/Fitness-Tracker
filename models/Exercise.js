// Require mongoose to create the schema
const mongoose = require("mongoose")
// Require Schema from mongoose
const Schema = mongoose.Schema
// Define the excercise Schema
const exerciseSchema = new Schema({
    type:{
        type: String,
        trim: true,
        required: "Enter an exercise type"
    },
    name:{
        type: String,
        trim: true,
        required:"Enter an exercise name"
    },
    duration:{
        type: Number,
        required: "workout duration is required"
    },
    weight:{
        type: Number,
        required: false
    },
    reps:{
        type: Number,
        required: false
    },
    sets:{
        type: Number,
        required: false
    },
    distance:{
        type: Number,
        required: false
    }

})
// Define exercise as a mongoose model
const Exercise = mongoose.model('Exercise', exerciseSchema)
// module export Exercise
module.exports = Exercise