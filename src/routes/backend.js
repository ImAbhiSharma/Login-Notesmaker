const express = require('express');
const router = express.Router();


const userController = require("../controller/userControl")
const {checkUser} = require("../controller/signin")
const {updateUser, deactivateUser, permanentlyDeleteUser} = require("../controller/update");




router.use("/create_user",userController.createUser)
router.use("/check_user", checkUser)
router.put("/update_user", updateUser)
router.delete("/deactivateUser", deactivateUser)
router.delete("/deleteUser", permanentlyDeleteUser)


module.exports = router;