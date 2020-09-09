const express = require("express");
const app = express();
const path = require("path");
let heroes = path.resolve("heroes.json");
app.get("/", function (req, res) {
  res.send(
    "​Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne yhueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan comoinspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer enti!."
  );
});
app.get("/heroes", function (req, res) {
  res.sendfile("heroes");
});

app.listen(3030, () => console.log("Esto funciona"));
