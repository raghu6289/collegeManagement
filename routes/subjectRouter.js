const subController = require("../controller/subjectController")

const router = require("express").Router()

// add using POST

router.post("/subject",subController.addSubject)
router.get("/subject",subController.getAllSubject)

router.get("/subject/:id",subController.getOneSubject)
router.put("/subject/:id",subController.updateSubject)
router.delete("/subject/:id",subController.deleteSubject)

module.exports=router
