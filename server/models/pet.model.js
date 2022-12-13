const mongoose = require('mongoose');

const PetSchema = mongoose.Schema({
    petName: {
        type: String,
        required: [true, 'Please provide a first name!'],
        unique: [true, 'There is a pet with this name in our system already. Please rename pet.'],
        minlength: [3, 'Pet name must be three characters or longer.']
    },
    type: {
        type: String,
        required: [true, 'Please provide type of pet,e.g, dog.'],
        minlength: [3, 'Pet name must be three characters or longer.']
    },
    description: {
        type: String,
        required: [true, 'Please describe pet for future adopters!'],
        minlength: [3, 'Description must be three characters or longer.' ],
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    }},
    {timesstamps: true});

module.exports= mongoose.model('Pet', PetSchema);