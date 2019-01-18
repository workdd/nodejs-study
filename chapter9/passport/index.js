const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const {User} = require('../models');

module.exports = (passport) =>{
    passport.serializeUser((user,done)=>{ //어떤 data를저장할지
        done(null,user.id);
    });
    passport.deserializeUser((id,done)=>{//매 요청시 실행됨
        User.find({where:{id}})
            .then(user=> done(null,user))
            .catch(err=>done(err));
    });

    local(passport);
    kakao(passport);
};
