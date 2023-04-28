const express = require("express");
const router = express.Router();
const drugController = require("../controllers/medic.controller");

router.post("/saveDrug", drugController.saveDrug);
router.get("/listDrug", drugController.listDrug);
router.put("/updateDrug/:id", drugController.updateDrug);
router.delete("/deleteDrug/:id", drugController.deleteDrug);
router.get('/drugByID/:id',drugController.drugID);
router.delete("/deleteallDrug",drugController.deleteAllDrug);
module.exports = router;