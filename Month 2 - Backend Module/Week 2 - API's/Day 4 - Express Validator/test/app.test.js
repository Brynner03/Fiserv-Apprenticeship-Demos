const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/User");

// Mock the create method in the User model
// This ensures that the test does not connect to the real database
jest.mock("../src/models/User.js", () => ({ create: jest.fn() }));

describe("User routes", () => {
    
    it("Should create a user and return it", async () => {
        // Define the user data we want to send in the request
        const userData = {
            username: "testuser",
            email: "email@hotmail.com",
            password: "password"
        };

        // Create a mock user response, simulating the database response
        const userMock = { ...userData, _id: "mockedId" };

        // Set up the mock to resolve with the mock user when User.create is called
        User.create.mockResolvedValue(userMock);

        // Make a POST request to the /user route with the user data
        const response = await request(app).post("/user").send(userData);

        // Assert the response status and body
        expect(response.status).toBe(200);
        expect(response.body).toEqual(userMock);

        // Verify that User.create was called with the correct data
        expect(User.create).toHaveBeenCalledWith(userData);
    });

});
