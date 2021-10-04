const express = require("express");
const router = express.Router();

const sauceCtrl = require("../controllers/sauce");
//Permet de protéger les routes
const auth = require("../middleware/auth");

router.post("/", auth, sauceCtrl.createSauce);

router.put("/:id", auth, sauceCtrl.modifySauce);

router.delete("/:id", auth, sauceCtrl.deleteSauce);
//Récupération d'un seul objet
router.get("/:id", auth, sauceCtrl.getOneSauce);

//Récupération de tous les objets
router.get("/", auth, sauceCtrl.getAllSauces);

module.exports = router;