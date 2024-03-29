const db = require("../models")

const Dept = db.department;
const Students = db.student;
const Staffs = db.staff;

// Creating APi's

// 1. Add Department

addDept = async (req, res) => {
    const dept = await Dept.create(req.body)
    return res.status(200).send(dept)
}

// 2. get All Department

getAllDept = async (req, res) => {
    const dept = await Dept.findAll({})
    return res.status(200).send(dept)
}

// 3. get single Department details

getOneDept = async (req, res) => {
    let id = req.params.id
    const dept = await Dept.findOne({ where: { id: id } })
    return res.status(200).send(dept)
}

// 4. update Department details

updateDept = async (req, res) => {
    let id = req.params.id
    await Dept.update(req.body, { where: { id: id } })
    return res.status(200).send("Department details updated")
}

// 5. delete Department details

deleteDept = async (req, res) => {
    let id = req.params.id
    await Dept.destroy({ where: { id: id } })
    return res.status(200).send("Department details Deleted")
}

// 6 Department wise All Staffs

getAllStaff = async (req, res) => {
    let id = req.params.id;
    const data = await Dept.findAll({
        include: [{
            model: Staffs,
            as: "staffs",
            attributes: ['id','name', 'phoneNumber', 'address','dept_id']
        }],
        where: {
            id: id
        }
    })
    return res.status(200).send(data)
}

// 7 Department wise All students

getAllStudent = async (req, res) => {
    let id = req.params.id;
    const data = await Dept.findAll({
        include: [{
            model: Students,
            as: "students",
            attributes: ['id','name', 'phoneNumber', 'address','dept_id']
        }],
        where: {
            id: id
        }
    })
    return res.status(200).send(data)
}



module.exports = {
    addDept,
    getOneDept,
    getAllDept,
    updateDept,
    deleteDept,
    getAllStaff,
    getAllStudent
}