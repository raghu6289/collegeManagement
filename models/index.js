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

// db.sequelize.sync().then(() => {
//     console.log("Sync is Done..");
// }).catch((err)=>{
//     console.log("error occured..",err);
// })

// Relationship

db.department.hasMany(db.student,{foreignKey:"dept_id",sourceKey:"id"})
db.student.belongsTo(db.department,{foreignKey:"dept_id",targetKey:"id"})

db.department.hasMany(db.staff,{foreignKey:"dept_id",sourceKey:"id"})
db.staff.belongsTo(db.department,{foreignKey:"dept_id",targetKey:"id"})

db.student.hasMany(db.subject,{foreignKey:"student_id",sourceKey:"id"})
db.subject.belongsTo(db.student,{foreignKey:"student_id",targetKey:"id"})

db.subject.hasMany(db.marks,{foreignKey:"sub_id",sourceKey:"id"})
db.marks.belongsTo(db.subject,{foreignKey:"sub_id",targetKey:"id"})

db.student.hasMany(db.marks,{foreignKey:"student_id",sourceKey:"id"})
db.marks.belongsTo(db.student,{foreignKey:"student_id",targetKey:"id"})

module.exports = db