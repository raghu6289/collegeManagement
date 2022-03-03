const deptController = require("../controller/departmentController.js")

const router = require("express").Router()

// add using POST

router.post("/department",deptController.addDept)
router.get("/department",deptController.getAllDept)

router.get("/department/:id",deptController.getOneDept)
router.put("/department/:id",deptController.updateDept)
router.delete("/department/:id",deptController.deleteDept)

module.exports=router
