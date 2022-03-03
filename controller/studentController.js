const db = require("../models")

const Student = db.student

// Creating APi's

// 1. Add Students

addStudent = async (req, res) => {
    const student = await Student.create(req.body)
    return res.status(200).send(student)
}

// 2. get All Students

getAllStudent = async (req, res) => {
    const student = await Student.findAll({})
    return res.status(200).send(student)
}

// 3. get single student details

getOneStudent = async (req, res) => {
    let id=req.params.id
    const student = await Student.findOne({where:{id:id}})
    return res.status(200).send(student)
}

// 4. update student details

updateStudent = async (req, res) => {
    let id=req.params.id
    await Student.update(req.body,{where:{id:id}})
    return res.status(200).send("Student details updated")
}

// 5. delete student details

deleteStudent = async (req, res) => {
    let id=req.params.id
    await Student.destroy({where:{id:id}})
    return res.status(200).send("Student details Deleted")
}


module.exports={
    addStudent,
    getAllStudent,
    getOneStudent,
    updateStudent,
    deleteStudent
}