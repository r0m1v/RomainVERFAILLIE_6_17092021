const express = require("express");
const mongoose = require("mongoose");

const sauceRoutes = require("./routes/sauce");
const userRoutes = require("./routes/user");

mongoose
  .connect(
    "mongodb+srv://rom1v:HnlKh99kRr8OIvUC@cluster0.th9mo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((er) => console.log("Connexion à MongoDB échouée !", er));

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

//Affiche dans le terminal que l'appli est bien lancé
app.listen(3000, (req, res, next) => {
  console.log("appli lancée");
});

app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes); //route attendu par le frontend

module.exports = app;
