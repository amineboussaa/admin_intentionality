const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
require('../config/passport')(passport);


/* GET users listing. */

router.get('/',passport.authorize('jwt',{ session : false}),function (request, response, next) {

    User.getAllUsers(function (error, data) {
        if (error) {
            console.log("Failed to query form users: " + error);
            return response.sendStatus(500);
        } else {
            console.log("Users fetched Successfully");
            response.json(data);
            response.end();
        }
    });

});
/* GET user by id */

router.get('/:id',passport.authorize('jwt',{ session : false}), function (request, response, next) {

    let id = request.params.id;
    User.getById(id, function (error, data) {
        if (error) {
            console.log("Failed to query form users: " + error);
            return response.sendStatus(500);
        } else {
            console.log("User fetched Successfully");
            response.json(data);
        }
    })

});

/* Add new User */

router.post('/singup', function (request, response, next) {
    let body = request.body;
    console.log(request.body);
    body.isActif = parseInt(body.isActif);
    const content = Object.values(body).map((value) => value);
    content.push(new Date().toISOString().slice(0, 19).replace('T', ' '));
    User.addUser(content, function (error, data) {
        if (error) {
            console.log("Failed to insert new user: " + error)
            return response.sendStatus(500);
        } else {
            console.log("Inserted a new user with id: ", data.insertId);
            response.sendStatus(200);
        }
    })
});

/* Update a User */

router.put('/update/:id',passport.authorize('jwt',{ session : false}), function (request, response, next) {
    let id = request.params.id;
    let body = request.body;
    console.log(body);
    delete body['id'];
    delete body['DateCreation'];
    body.isActif = parseInt(body.isActif);
    const content = Object.values(body).map((value) => value);
    content.push(id);
    console.log(content);
    User.updateUser(content, function (error) {
        if (error) {
            console.log("failed to update user" + error);
            response.sendStatus(500);
            response.end();
        } else {
            console.log("user updated Successfully ");
                   response.sendStatus(200);
                   response.end();
        }
    });
});

/* activated / deactivated a User */
router.get('/de_activate/:id',passport.authorize('jwt',{ session : false}), function (request, response, next) {
    User.de_activateUser(request.params.id, function (error) {
        if (error) {
            console.log("Failed to activated / deactivated user: " + error);
            return response.sendStatus(500);
        } else {
            console.log("user activated / deactivated successfully");
            return response.sendStatus(200);
        }
    });
});


router.post('/login', function (request, response) {
    const email = request.body.email;
    const password = request.body.password;
    User.getByEmail(email, function (error, data) {
        if(error) throw error ;
        let user = data[0];
        if(!user){
            console.log("user not found");
            return response.json({success: false, msg: 'Invalid email'});
        }
        User.comparePassword(password,user.password,function (error,isMatch) {
            if(error) throw error;
            if(isMatch){
                const token = jwt.sign({user : user.idUser}, 'app-super-secret' , {
                    expiresIn: 604800 // une semaine
                });
                console.log({
                    success : true ,
                    token: 'JWT '+ token,
                    user : user
                })
                response.json({
                    success : true ,
                    token: 'JWT '+ token,
                    user : user
                });
            }else{
                console.log("Invalid password");
                response.json({success: false , msg: 'Incorrect password'});
            }
        });
    });
});


module.exports = router;
