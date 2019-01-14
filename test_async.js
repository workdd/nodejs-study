let Users=[{
    name:'zero',
    gender:'f'
},
{
    name:'jg',
    gender:'m'
},{
    name:'hc',
    gender:'f'
}]


// const findAndSaveUser= (Users)=>{
//     Users.findOne({})
//         .then((user)=>{
//             user.name ='zero';
//             console.log(user.name);
//             return user.save();
//         })
//         .then((user)=>{
//             console.log(user);
//             return Users.findOne({gender:'m'});
            
//         })
//         .catch(err=>{
//             console.error(err);
//         });
// }

//use async and await
async function findAndSaveUser(Users){
    try{
        let user = await Users.findOne({});//promise 앞에 await 붙임.
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender:'m'});
} catch (error){
    console.log(error);
}
}