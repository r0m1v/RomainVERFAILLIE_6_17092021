const express = require("express");
const app = express();
//Initialise l'API pour recevoir des requêtes de n'importe où
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//Permet de récupérer des données de formulaire au format json
app.use(express.json());

//Chemin de création de compte
app.post("/api/auth/signup", (req, res, next) => {
    console.log(req.body);
  res.status(201).json({ message: "objet enregistré" });
});

app.listen(3000, (req, res, next) => {
  console.log("appli lancée");
});

module.exports = app;
