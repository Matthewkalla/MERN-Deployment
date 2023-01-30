const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "A name is required."],
        minlength: [3, "name must be at least 3 characters long!"]
    },

    petType: {
        type: String,
        required: [true, "Type is required."],
        minlength: [3, "Type must be at least 3 characters long."]
    },

    petDescription:{
        type: String,
        required: [true, "A description is required."],
        minlength: [3, "Description must be at least 3 characters in length."]
    },

    skill1: {
        type: String,
        default: ""
    },
    skill2: {
        type: String,
        default: ""
    },
    skill3: {
        type: String,
        default: ""
    }
}, {timestamps:true});

module.exports = mongoose.model("Pet", PetSchema);