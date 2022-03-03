const db = require("../models");
const staff = require("../models/staff");

const Student = db.student;
const Dept=db.department;
const Subject=db.subject;

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

// 6 Student Belongsto which department

getDepartment = async (req, res) => {
    let id = req.params.id;
    const data = await Student.findOne({
        include: [{
            model: Dept,
            as: "department",
            attributes: ['name','desc']
        }],
        where: {
            id: id
        }
    })
    return res.status(200).send(data)
}

// 7. Student Marks and SubjectNames

getSubject = async (req, res) => {
    let id = req.params.id;
    const data = await Student.findOne({
        include: [{
            model: Subject,
            as: "subject",
            attributes: ['semister','subName']
        }],
        where: {
            id: id
        }
    })
    return res.status(200).send(data)
}

module.exports={
    addStudent,
    getAllStudent,
    getOneStudent,
    updateStudent,
    deleteStudent,
    getDepartment,
    getSubject
}