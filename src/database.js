const mongoose = require('mongoose')

module.exports = function startDataBaseConnection() {
    const MONGO_URI = 'mongodb://localhost:27017/api-rest';
    mongoose.set('useFindAndModify', true);
    mongoose.connect(process.env.MONGODB_URL || MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
        .catch(err => console.log(`Error to connect to database: ${err}`))
        .then((db) => console.log('Database is connected'));
}