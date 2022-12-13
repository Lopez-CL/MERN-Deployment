const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/pets_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Established connection to the pets database!'))
    .catch(err => console.log('Something went wrong when connection to the pets database. Please check config file.'))