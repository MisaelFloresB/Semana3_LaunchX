const User = require('./../../app/models/user')

describe("Unit test for User class", () =>{
    test('Create an User object', () =>{
        const user = new User(1, "MisaelF", "Misael Flores", "Bio", "dateCreated", "lastUpdate")

        expect(user.id).toBe(1)
        expect(user.userName).toBe("MisaelF")
        expect(user.name).toBe("Misael Flores")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdate).toBe("lastUpdate")
    });

})