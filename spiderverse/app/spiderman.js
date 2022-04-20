class spiderman{
    constructor(name, age, actor, movies, cinemaStudio){
        this.name = name,
        this.age = age,
        this.actor = actor,
        this.movies = movies,
        this.cinemaStudio = cinemaStudio
    }
    // name = "Spiderman"
    // age = "23"
    // actor = "Tom Holland"
    // movies = "3"
    // cinemaStudio = "Marvel/Sony Studios"

    //Metodo getInfo()
    getInfo(){
        return `hey, i'm ${this.actor} from ${this.cinemaStudio}`
    } 

}

module.exports = spiderman