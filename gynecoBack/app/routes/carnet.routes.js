const express = require("express");
const router = express.Router();
const carnetController = require("../controllers/carnet.controller");
const multer = require("../middleware/multer");

router.post("/save", multer.upload.single('photo'), carnetController.saveCarnet);
router.get("/list", carnetController.listCarnet);
router.put("/update/:id", carnetController.updateCarnet);
router.delete("/delete/:id", carnetController.deleteCarnet);
router.get('/carnetByID/:id',carnetController.carnetID);
router.get("/getcarnet/:id",carnetController.getcarnetID);
router.delete("/deleteall",carnetController.deleteAll);
module.exports = router;