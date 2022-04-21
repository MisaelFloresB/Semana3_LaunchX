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

    test("4, Given a list of users give me the list of usernames",() =>{

        const user1 = UserService.create(1, "MisaelFlores", "Misael")
        const user2 = UserService.create(1, "MisaelFlores2", "Misael")
        const user3 = UserService.create(1, "MisaelFlores3", "Misael")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("MisaelFlores")
        expect(usernames).toContain("MisaelFlores2")
        expect(usernames).toContain("MisaelFlores3")
    });
});