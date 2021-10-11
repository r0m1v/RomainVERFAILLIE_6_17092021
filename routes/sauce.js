const express = require("express");
const router = express.Router();

const sauceCtrl = require("../controllers/sauce");

const multer = require("../middleware/multer-config");
//Permet de protéger les routes
const auth = require("../middleware/auth");

router.post("/", auth, multer, sauceCtrl.createSauce);
router.post("/:id/like", auth, sauceCtrl.like);
router.put("/:id", auth, multer, sauceCtrl.modifySauce);

router.delete("/:id", auth, sauceCtrl.deleteSauce);
//Récupération d'un seul objet
router.get("/:id", auth, sauceCtrl.getOneSauce);

//Récupération de tous les objets
router.get("/", auth, sauceCtrl.getAllSauces);

module.exports = router;