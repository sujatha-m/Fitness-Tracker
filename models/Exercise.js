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

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise