const express = require('express');
const app = express();
require("dotenv/config");
const mongoose = require('mongoose');


const apiRouter = require('./apiRouter');

app.use('/',apiRouter);

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,
    {useUnifiedTopology:true,
     useNewUrlParser:true
    })
.then(()=> console.log('connected to database.'))
.catch(error =>console.log(`database conenection error: ${error}`));

app.listen(process.env.PORT,()=>{

    console.log('Server running at http://localhost:'+ process.env.PORT);

});