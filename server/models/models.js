const mongoose = require('mongoose');
const dotenv = require('dotenv');

const MONGO_URI = process.env.db_uri

mongoose
.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Food',
})
.then(() => console.log('Connected to Mongo DB.'))
.catch((err) => console.log(err));

const Schema = mongoose.Schema;