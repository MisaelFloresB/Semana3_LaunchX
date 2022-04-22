const UserService = require('./../services/UserService')

class userView{

    static createUser(payload){
        if(payload == null){
            return {error: "El payload no existe."}
        };
    };
};

module.exports = userView