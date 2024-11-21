const { Router } = require("express")
const handleValidationErrors = require('../middleware/index')
const { param, check } = require("express-validator")
const router = Router()
const User = require("../models/User")



// Get all users
router.get("/", async (req, res, next) => {

    try {
        const users = await User.findAll({})
        res.send(users)
    } catch (error) {
        next(error)
    }

})

// Create a new user
router.post("/", [
    // Validate 'username' exists in the request body
    check("username").exists().withMessage("Username is required")
    // Validate 'username' is a string
    .isString().withMessage("Username must be a string")
    // Ensure 'username' is not empty
    .notEmpty().withMessage("Username cannot be empty")
], 
    // Middleware to handle validation errors
    handleValidationErrors,  
    async (req, res, next) => {
        try {
            const user = await User.create(req.body);
            res.send(user);
        } catch(error) {
            next(error);
        }
    }
);

// Get a user by username with validation
router.get("/username/:username", 
    // Validate 'username' is alphabetic
    param("username").isAlpha().withMessage("Must be a valid string"), 
    // Middleware to handle validation errors
    handleValidationErrors,  
    async (req, res, next) => {
        try {
            const user = await User.findOne({
                where: { username: req.params.username }
            });
            if (!user) return res.status(404).json({ message: "User not found" });
            res.json({ user });
        } catch (error) {
            next(error);
        }
    }
);


// Update a user using the username parameter
router.put("/:username", async (req, res, next) => {

    try {
        await User.update(req.body, {
            where: { username: req.params.username }
        })
        res.status(200)
    } catch (error) {
        next(error)
    }

})

// Delete a user using the username paramater
router.delete("/:username", async (req, res, next) => {

    try {
        await User.destroy({
            where: { username: req.params.username }
        })
        res.status(200)
    } catch (error) {
        next(error)
    }

})

module.exports = router