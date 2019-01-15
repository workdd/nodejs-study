const timeout = setTimeout(()=>{
    console.log('1.5');
},1500);

const interval = setInterval(()=>{
    console.log('1 repeat');
},1000);

const timeout2 = setTimeout(()=>{
    console.log('실행되면 안되요');
},3000);

setTimeout(()=>{
    clearTimeout(timeout2);
    clearInterval(interval);
},2500);