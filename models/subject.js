module.exports=(Sequelize,DataTypes)=>{
    const subject=Sequelize.define("subject",{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        semister:{
            type:DataTypes.ENUM('1', '2','3','4','5','6','7','8'),
            allowNull:false,
        },
        subName:{
            type:DataTypes.ENUM("c","java","english"),
            allowNull:false,
        }
    },{
        freezTableName:true,
        paranoid:true,
    })
    return subject
}