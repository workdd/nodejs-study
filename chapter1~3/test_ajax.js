var xhr = new XMLHttpRequest();
xhr.onreadystagechange = function(){
    if(xhr.readState === xhr.DONE){
        if(xhr.status ===200 || xhr.status === 201){
            console.log(xhr.responseText);
        } else{
            console.error(xhr.responseText);
        }
    }
};
xhr.open('GET','localhost:4000');
xhr.send();




//post
var xhr = new XMLHttpRequest();
var data ={
    name:'jg',
    birth:1998
};
xhr.onreadystagechange = function(){
    if(xhr.readState === xhr.DONE){
        if(xhr.status ===200 || xhr.status === 201){
            console.log(xhr.responseText);
        } else{
            console.error(xhr.responseText);
        }
    }
};
xhr.open('POST','localhost:4000');
xhr.setRequestHeader('Content-Type','application/json');
xhr.send(JSON.stringify(data))




