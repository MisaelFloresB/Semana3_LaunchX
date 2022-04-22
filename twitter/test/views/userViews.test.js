const userView = require('./../../app/views/userView')

describe("Tests for user view", ()=>{
    test("Return an error object when try to create a new user with an null payload", () => {
        const payload = null
        const result = userView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)

    });
});