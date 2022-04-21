const User = require('./../models/user')

class UserService{
    static create(id, userName, name){
        return new User(id, userName, name, "Sin Bio")
    }

    static getInfo(User){
        let list = [User.id, User.userName, User.name, User.bio]
        

        return list
    }

    static updateUserUsername(user){

        return user.userName = "MisaelFB"
    }
}

module.exports = UserService