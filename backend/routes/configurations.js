let express = require('express');
let router = express.Router();
let user = require('../Models/Configuration');
const passport = require('passport');
require('../config/passport')(passport);


/* GET The Configuration */

router.get('/',passport.authorize('jwt',{ session : false}), function (request, response, next) {

    user.getConfiguration(function (error, data) {
        if (error) {
            console.log("Failed to query form confiapp: " + error);
            return response.sendStatus(500);
        }else{
            console.log("Configuration fetched Successfully");
            response.json(data);
        }
    });

});


/* Update a Configuration */

router.put('/update',passport.authorize('jwt',{ session : false}),function (request,response,next) {
    let body = request.body;
    console.log(body);
    const content = Object.values(body).map((value) => parseInt(value));
    user.updateConfiguration(content,function (error) {
        if(error){
            console.log("failed to update configuration "+error);
            return response.sendStatus(500);
        }else{
            console.log("configuration was updated Successfully ");
            return  response.sendStatus(200);
        }
    });
});

module.exports = router;
