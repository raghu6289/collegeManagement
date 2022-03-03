// const dbconfig = require("../config/dbconfig.js")
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    username:"root",
    password:"root",
    database:"management",
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log("failed to connect..".err);
})

db = {};

db = sequelize;
db = Sequelize;

db.department = require("./department.js")(sequelize, DataTypes)
db.student = require("./student.js")(sequelize, DataTypes)
db.staff = require("./staff.js")(sequelize, DataTypes)
db.subject = require("./subject.js")(sequelize, DataTypes)
db.marks = require("./marks.js")(sequelize, DataTypes)


sequelize.sync({alter:true}).then(()=>{
    console.log("Sync is Done..");
})

// Relationship

// For Students one to Many, Department to student

db.department.hasMany(db.student,{
    foreignKey:"dept_id",sourceKey:"id",
    as:"students"
})

db.student.belongsTo(db.department,{
    foreignKey:"dept_id",targetKey:"id",
    as:"department"
})

//For Staff one to Many Department to Staff

db.department.hasMany(db.staff,{
    foreignKey:"dept_id",sourceKey:"id",
    as:"staffs"
})

db.staff.belongsTo(db.department,{
    foreignKey:"dept_id",targetKey:"id",
    as:"staffDepartment"
})

// Student to subject

db.student.hasMany(db.subject,{
    foreignKey:"student_id",sourceKey:"id",
    as:"subject"
})

db.subject.belongsTo(db.student,{
    foreignKey:"student_id",targetKey:"id",
    as:"students"
})

// Department to subject

db.department.hasMany(db.subject,{
    foreignKey:"dept_id",sourceKey:"id",
    as:"departmentsubject"
})

db.subject.belongsTo(db.department,{
    foreignKey:"dept_id",targetKey:"id",
    as:"department"
})


module.exports = db