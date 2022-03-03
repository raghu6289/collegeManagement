const studentController = require("../controller/studentController.js")

const router = require("express").Router()

// add using POST

router.post("/student",studentController.addStudent)
router.get("/student",studentController.getAllStudent)

router.get("/student/:id",studentController.getOneStudent)
router.get("/student/:id/department",studentController.getDepartment)

router.get("/student/:id/subject",studentController.getSubject)


router.put("/student/:id",studentController.updateStudent)
router.delete("/student/:id",studentController.deleteStudent)

module.exports=router
