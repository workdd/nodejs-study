module.exports = (sequelize,DataTypes)=>{
    return sequelize.define('post',{
        content:{
            type:DataTypes.STRING(140),
            allowNUll:false,
        },
        img:{
            type:DataTypes.STRING(200),
            allowNUll:true,
        },
    },{
        timestamps:true,
        paranoid:true,
    })
};
