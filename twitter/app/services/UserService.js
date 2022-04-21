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

    static getAllUsernames(User){

        let user1 = "MisaelFlores"
        let user2 = "MisaelFlores2"
        let user3 = "MisaelFlores3"

        let usernames = [user1, user2, user3]

        return usernames
    }
}

module.exports = UserService