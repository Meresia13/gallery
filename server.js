const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');
<<<<<<< HEAD
=======

>>>>>>> test
// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Initializing the app
const app = express();

// connecting the database
<<<<<<< HEAD
//let mongodb_url = 'mongodb://localhost:27017/';
//let dbName = 'darkroom';
//mongoose.connect(`${mongodb_url}${dbName}`,{ useNewUrlParser: true , useUnifiedTopology: true }, (err)=>{
    //if (err) console.log(err)
//});

// test if the database has connected successfully
//let db = mongoose.connection;
//db.once('open', ()=>{
    //console.log('Database connected successfully')
//})
//get mongodb_url from the _config.js file
let mongodb_url = config.mongoURI.production;

// console.log(mongodb_url);

let dbName = "darkroom";
mongoose.connect(
  `${mongodb_url}${dbName}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
  }
);

// test if the database has connected successfully
=======

const MONGODB_URI = process.env.MONGODB_URI || config.mongoURI[app.settings.env]
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true  },(err)=>{
    if (err) {
        console.log(err)
    }else{
        console.log(`Connected to Database: ${MONGODB_URI}`)
    }
});

// test if the database has connected successfully
>>>>>>> test
// let db = mongoose.connection;
// db.once('open', ()=>{
//     console.log('Database connected successfully')
// })
<<<<<<< HEAD
=======

>>>>>>> test



// View Engine
app.set('view engine', 'ejs');

// Set up the public folder;
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json())


app.use('/', index);
app.use('/image', image);



 
const PORT = process.env.PORT || 8000;
app.listen(PORT,() =>{
<<<<<<< HEAD
    console.log(`Server is listening at http://localhost:8000`)
});
=======
    console.log(`Server is listening at http://localhost:${PORT}`)
});


module.exports = app;
>>>>>>> test
