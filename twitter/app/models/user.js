class User{
    constructor(id, userName, name, bio, dateCreated, lastUpdate){
        this.id = id
        this.userName = userName
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdate = new Date()
    }
    get getUserName(){
        return this.userName
    }

    get getBio(){
        return this.bio
    }

    get getDateCreated(){
        return this.dateCreated
    }

    get getLastUpdate(){
        return this.lastUpdate
    }
}

module.exports = User