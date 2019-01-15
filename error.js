process.on('uncaughtException',(err)=>{
    console.error('예상치 못한 에러',err);
});

setInterval(()=>{
    throw new Error('임의로 에러발생!');
});

setTimeout(()=>{
    console.log('작동하고있습니다');

},2000);