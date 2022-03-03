const db = require("../models")

const Staff = db.staff

// Creating APi's

// 1. Add Staff

addStaff = async (req, res) => {
    const staff = await Staff.create(req.body)
    return res.status(200).send(staff)
}

// 2. get All Staffs

getAllStaff = async (req, res) => {
    const staff = await Staff.findAll({})
    return res.status(200).send(staff)
}

// 3. get single Staff details

getOneStaff = async (req, res) => {
    let id=req.params.id
    const staff = await Staff.findOne({where:{id:id}})
    return res.status(200).send(staff)
}

// 4. update Staff details

updateStaff = async (req, res) => {
    let id=req.params.id
    await Staff.update(req.body,{where:{id:id}})
    return res.status(200).send("Staff details updated")
}

// 5. delete staff details

deleteStaff = async (req, res) => {
    let id=req.params.id
    await Staff.destroy({where:{id:id}})
    return res.status(200).send("Staff details Deleted")
}


module.exports={
    addStaff,
    getAllStaff,
    getOneStaff,
    updateStaff,
    deleteStaff
}