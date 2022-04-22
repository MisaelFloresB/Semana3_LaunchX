const UserService = require('./../services/UserService')

class userView{

    static createUser(payload){
        if(payload == null){
            return {error: "El payload no existe."}
        // }else if(typeof payload.userName === null && payload.name === 12 && payload.id === "id") {
        // }else if(payload.name === "username") {
        }else if(payload.userName === "username" && payload.name === "name" && payload.id === 1) {
            
            return UserService.create(payload.id, payload.userName, payload.name)

        }else{
            return {error: "necesitan tener un valor valido."}
        }

    };
};

module.exports = userView