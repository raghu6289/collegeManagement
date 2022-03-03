module.exports=(Sequelize,DataTypes)=>{
    const marks=Sequelize.define("marks",{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
    },{
        freezTableName:true,
        paranoid:true,
    })
    return marks
}