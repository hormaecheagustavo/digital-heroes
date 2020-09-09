const express = require("express");
const app = express();
const path = require("path");
const { get } = require("http");
const heroes = require("heroes.json")
app.get("/", funtion (req,res){
  res.send("​Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne yhueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan comoinspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer enti!.")
});
app.get ("/heroes", function(req,res){
  
  res.send("heroes")
});


get.listen(3000);
