const { Router } = require("express")
const router = Router()
const User = require("../models/User")

// Create a new user
router.post("/", async (req, res, next) => {
    
    try {
        const user = await User.create(req.body)
        res.send(user)
    } catch(error) {
        next(error)
    }

})

// Get all users
router.get("/", async (req, res, next) => {

    try {
        const users = await User.findAll({})
        res.send(users)
    } catch (error) {
        next(error)
    }

})

// Get a user using the username parameter
router.get("/:username", async (req, res, next) => {

    try {
        const user = await User.findOne({
            where: { username: req.params.username }
        })
        res.send({ user })
    } catch (error) {
        next(error)
    }

})

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