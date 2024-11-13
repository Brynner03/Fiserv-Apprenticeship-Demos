const request = require("supertest")
const app = require("../src/app")
const User = require("../src/models/User")

// Mock the create method in User model
// Does not connect to our database
jest.mock("../src/models/User.js", () => ({ create: jest.fn() }))

describe("User routes", () => {
    
    it("Should create a user and return it", async () => {
        const userData = {
            username: "testuser",
            email: "email@hotmail.com",
            password: "password"
        }

        // Create a mock user
        const userMock = { ...userData, _id: "mockedId"}

        // This will create a user without saving it to our database
        User.create.mockResolvedValue(userMock)

        const response = await request(app).post("/user").send(userData)

        expect(response.status).toBe(200)
        expect(response.body).toEqual(userMock)
        expect(User.create).toHaveBeenCalledWith(userData)
    })

})