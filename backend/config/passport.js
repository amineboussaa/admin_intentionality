const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');


module.exports = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = "app-super-secret";
    passport.use(new JwtStrategy(opts,(jwt_playload,done)=>{
            console.log(jwt_playload);
            User.getById(jwt_playload.user,(error,user)=>{
                if(error){
                    return done(error,false);
                }
                if(user){
                    return done(null,user);
                }else{
                    return done(null,false);
                }
            });
        }));
};