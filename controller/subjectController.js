const db = require("../models")

const Subject = db.subject

// Creating APi's

// 1. Add Subject

addSubject = async (req, res) => {
    const sub = await Subject.create(req.body)
    return res.status(200).send(sub)
}

// 2. get All Subject

getAllSubject = async (req, res) => {
    const sub = await Subject.findAll({})
    return res.status(200).send(sub)
}

// 3. get single Subject details

getOneSubject = async (req, res) => {
    let id=req.params.id
    const sub = await Subject.findOne({where:{id:id}})
    return res.status(200).send(sub)
}

// 4. update Staff details

updateSubject = async (req, res) => {
    let id=req.params.id
    await Subject.update(req.body,{where:{id:id}})
    return res.status(200).send("Subject details updated")
}

// 5. delete Subject details

deleteSubject = async (req, res) => {
    let id=req.params.id
    await Subject.destroy({where:{id:id}})
    return res.status(200).send("Subject details Deleted")
}


module.exports={
    addSubject,
    getAllSubject,
    getOneSubject,
    updateSubject,
    deleteSubject

}