let connection = require('../config/db');
class User{

    constructor(id,login,password,email,telephone,name,isActif){
        this.id = id;
        this.login = username;
        this.password = password;
        this.email = email;
        this.telephone = telephone;
        this.isActif = isActif;
        this.DateCreation = DateCreation;

    }

    /**
     *
     * @param username
     * @param callback
     */
    static getAllUsers(callback){
        connection.query("SELECT * FROM user",[],callback);
    }
    /**
     * Retourne un utilisateur par son login
     * @param email
     * @param callback
     */
    static getByEmail(email,callback){
        connection.query("SELECT * FROM user WHERE email= ?",[email],callback);
    }

    /**
     *
     * @param id
     * @param callback
     */
    static getById(id,callback){
        connection.query("SELECT * FROM user WHERE idUser= ?",[id],callback);
    }

    /**
     *
     * @param content
     */
    static addUser(content,callback){
        connection.query("INSERT INTO user (name,login,email,password,telephone,isActif,DateCreation) VALUES(?,?,?,?,?,?,?)",
            content,callback)
    }

    static updateUser(content,callback){
        connection.query("UPDATE  `user` set  `name` = ?, `email`=?, `login`=?, `telephone`=?, `password`=?, `isActif`=? WHERE idUser = ? ",
            content,callback)
    }

    static de_activateUser(id,callback){
        User.getById(id,function (error,data) {
            if(error){
                console.log("Failed to fetch User" +  error);
            }else{
                let isActif = (data[0].isActif === 0)? 1 : 0;
                connection.query("UPDATE  `user` set  `isActif`=? WHERE iduser = ? ",
                    [isActif,id],callback);
            }
        })
    }

    /**
     *
     * @param candidatePassword
     * @param password
     * @param callback
     */
    static comparePassword(candidatePassword,password,callback){
        if(candidatePassword === password){
        callback(null,true);}
        else{ callback(null,null);}
    }
}

module.exports = User;