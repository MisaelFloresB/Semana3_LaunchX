const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () =>{
    test("1, Create a new user using the UserService",() =>{

        const user = UserService.create(1, "MisaelFlores", "Misael")
        expect(user.userName).toBe("MisaelFlores")
        expect(user.name).toBe("Misael")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });

    test("2, Get all user data in a list",() =>{

        const user = UserService.create(1, "MisaelFlores", "Misael")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("MisaelFlores")
        expect(userInfoList[2]).toBe("Misael")
        expect(userInfoList[3]).toBe("Sin Bio")
    });

    test("3, Update userName",() =>{

        const user = UserService.create(1, "MisaelFlores", "Misael")
        UserService.updateUserUsername(user, "MisaelFB")
        expect(user.userName).toBe("MisaelFB")
    });
});