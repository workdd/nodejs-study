const con = false;

const promise = new Promise((resolve,reject)=>{
    if(con){
        resolve('suc');
    }
    else{
        reject('fail');
    }
});

promise
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })