 
let mongoose = require('mongoose');
let Pintores = require('../models/Pintores');

let PintoresController = {};


Pintores.list = (req, res)=>{
    Pintores.find({})
        .limit(20)
        .skip(num:0)
        .exec(callback:(err, Pintores)=>{
            if (err){
                console.log(err, pintor);
            }
            res.render('../views/pintores/index',{
                Pintores: pintor,
                title: "Listado de pintores",
                year: new Date().getFullYear()
            });
        })
};

module.exports = PintoresController;
