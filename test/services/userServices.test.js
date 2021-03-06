const UserService = require('./../../app/services/userServices')

describe("Tests for userService", () =>{
    test('1. Create a new user using the userService', () =>{
        const user = UserService.create(1, "carlogilmar", "Carlo")
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).not.toBeUndefined()
    });
})