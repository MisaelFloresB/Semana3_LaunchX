const User = require('./../../app/models/user')

describe("Unit test for User class", () =>{
    test('Create an User object', () =>{
        const user = new User(1, "MisaelF", "Misael Flores", "Bio")

        expect(user.id).toBe(1)
        expect(user.userName).toBe("MisaelF")
        expect(user.name).toBe("Misael Flores")
        expect(user.bio).toBe("Bio")
        // expect(user.dateCreated).toBe("dateCreated")
        // expect(user.lastUpdate).toBe("lastUpdate")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefined()
    });

    test('Add getters', () =>{
        const user = new User(1, "MisaelF", "Misael Flores", "Bio")
        expect(user.getUserName).toBe("MisaelF")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdate).not.toBeUndefined()

    });

    test('Add setters', () =>{
        const user = new User(1, "MisaelF", "Misael Flores", "Bio")
        user.setUserName = "MisaelFlores"
        expect(user.userName).toBe("MisaelFlores")

        user.bio = "New Bio"
        expect(user.bio).toBe("New Bio")

    });

})