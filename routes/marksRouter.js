const marksController = require("../controller/marks.js")

const router = require("express").Router()

// add using POST

router.get("/marks",marksController.getAllMarks)

router.get("/marks/:id",marksController.getOnemark)

module.exports=router
