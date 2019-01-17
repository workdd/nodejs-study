const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize= new Sequelize(
  config.database,config.username,config.password,config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./user')(sequelize,Sequelize);
db.Post = require('./post')(sequelize,Sequelize);
db.Hashtag = require('./hashtag')(sequelize,Sequelize);
db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);
db.Post.belongsToMany(db.Hashtag,{through:'PostHashtag'});
db.Hashtag.belongsToMany(db.Post,{through:'PostHashtag'});


//유저간 팔로워도 N:M 관계이다.
db.User.belongsToMany(db.User,{
  foreignKey:'followingId',
  as:'Followers', // join 작업시 사용하는 이름.
  through:'Follow'//모델 이름.
});
db.User.belongsToMany(db.User,{
  foreignKey:'followerId',
  as:'Following',
  through:'Follow'
});

module.exports = db;
