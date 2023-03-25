const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const passController = require("../controllers/forgetpass.controller");

router.post("/signup", authController.signup)
router.post("/signin", authController.signin) 
//resetPassword
router.post("/ResetPassword", passController.ResetPassword)
router.post("/ValidPasswordToken", passController.ValidPasswordToken)
router.post("/NewPassword", passController.NewPassword)

module.exports = router;