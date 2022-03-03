const staffController = require("../controller/staffController.js")

const router = require("express").Router()

// add using POST

router.post("/staff",staffController.addStaff)
router.get("/staff",staffController.getAllStaff)

router.get("/staff/:id",staffController.getOneStaff)
router.get("/staff/:id/department",staffController.getDepartment)

router.put("/staff/:id",staffController.updateStaff)
router.delete("/staff/:id",staffController.deleteStaff)

module.exports=router
