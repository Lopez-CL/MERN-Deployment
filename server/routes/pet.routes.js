const PetController = require('../controllers/pet.controller');

module.exports = app => {
    app.get('/api/getPets', PetController.displayAllPets);
    app.get('/api/getPet/:_id', PetController.getPetById);
    app.post('/api/createPet', PetController.createPet);
    app.put('/api/updatePet/:_id', PetController.updatePet);
    app.delete('/api/deletePet/:_id', PetController.deletePet);
};