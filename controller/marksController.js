const db = require("../models")

const Marks = db.marks

// Creating APi's

// 1. get All Staffs

getAllMarks = async (req, res) => {
    const marks = await Marks.findAll({})
    return res.status(200).send(marks)
}

// 2. get single student mark details

getOnemark = async (req, res) => {
    let id=req.params.id
    const marks = await Marks.findOne({where:{student_id:id}})
    return res.status(200).send(marks)
}

module.exports={
    getAllMarks,
    getOnemark
}