const express = require("express");
const app = express();

app.use(express.json())

// Import our user router
const userRouter = require("./routes/user")

// Use our user routes
app.use("/user", userRouter)


module.exports = app;