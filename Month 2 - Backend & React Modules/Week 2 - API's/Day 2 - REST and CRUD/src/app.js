const express = require("express");
const app = express();
const User = require("./models/User.js");

app.use(express.json())

// Get all users
app.get("/", async (req, res, next) => {

    try {
        const users = await User.findAll()
        if (!users) {
            throw new Error("No users found")
        }
        res.send(users)
    } catch (error) {
        next(error)
    }

})

// Create a new user
app.post("/", async (req, res, next) => {
    
    try {
        const user = await User.create(req.body)
        res.send(user)
    } catch(error) {
        next(error)
    }

})

// Get a user using the username parameter
app.get("/:username", async (req, res, next) => {

    try {
        const users = await User.findOne({
            where: { username: req.params.username }
        })
        if (!users) {
            throw new Error("No users found")
        }
        res.send(users.username)
    } catch (error) {
        next(error)
    }

})

// Update a user using the username parameter
app.put("/:username", async (req, res, next) => {

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
app.delete("/:username", async (req, res, next) => {

    try {
        await User.destroy({
            where: { username: req.params.username }
        })
        res.status(200)
    } catch (error) {
        next(error)
    }

})


module.exports = app;