const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;


let estatalesRouter = require('./routes/pintores');

const app = express();

app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname+'/public'));
app.use('/',PintoresRouter);


mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://<sebastiandavilach>:<davilachaparro>@cluster0-p6nh5.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(cadena,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Conexión con Mongo exitosa');
    })
    .catch(err=> console.log(err));


app.listen(port,()=>{
    console.log('Escuchando el puerto 3000');
});
