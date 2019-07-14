const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0-ohg36.mongodb.net/test?retryWrites=true&w=majority', { 
    useNewUrlParser:true,
});

app.use(require('./routes'));

app.listen(3333);