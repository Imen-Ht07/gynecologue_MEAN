const express = require("express");
const router = express.Router();
const patienteController = require("../controllers/patiente.controlleur");

router.post("/saveP",patienteController.savepatiente);
router.get("/findAll",  patienteController.findAll);
router.put("/update/:id", patienteController.update);
router.delete("/delete/:id", patienteController.delete);
router.get("/get/:id", patienteController.get);
router.get("/getP", patienteController.getNbrpatiente);
module.exports = router;