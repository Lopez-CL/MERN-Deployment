const Pet = require('../models/pet.model');

//create

module.exports.createPet = (req, res) => {
    const { body } = req;
    Pet.create(body)
        .then((newPet) => res.json(newPet))
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        })
};

// display all
module.exports.displayAllPets = (req, res) => {
    Pet.find().sort({
        type: 1
    })
        .then((allPets) => res.json(allPets))
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        })
};
// display one
module.exports.getPetById = (req, res) => {
    const { params } = req;
    Pet.findOne({ _id: params._id })
        .then((onePet) => res.json(onePet))
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        })
};
// update/put
module.exports.updatePet = (req, res) => {
    const { body, params } = req;
    Pet.findOneAndUpdate({ _id: params._id }, body, {
        new: true,
        runValidators: true,
    })
        .then((updatedPet) => res.json(updatedPet))
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        })
};
// delete
module.exports.deletePet = (req, res) => {
    const { params } = req;
    Pet.deleteOne({ _id: params._id })
        .then((result) => res.json(result))
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        })
};