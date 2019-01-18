exports.isLoggedIn=(req,res,next)=>{
    if(req.isAuthenticated()){ //로그인중이면 req.isAuthenticated가 true.
        next();
    } else{
        res.status(403).send('로그인 필요합니다')
    }
};

exports.isNotLoggedIn= (req,res,next)=>{
    if(!req.isAuthenticated()){
        next();
    } else{
        res.redirect('/');
    }
};
