const mongoose = require("mongoose")

const Schema = mongoose.Schema

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
        required: "Enter an exercise duration in minutes"
    },
    weight:{
        type: Number,
        required: "Enter your weight"
    },
    reps:{
        type: Number
    },
    sets:{
        type: Number
    },
    distance:{
        type: Number,
    }

})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise