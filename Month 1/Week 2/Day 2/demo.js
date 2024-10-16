// Create a user object
const user = {
    username: "v1p3r",
    email: "viper@gmail.com",
    password: "Fanged123",

    // Method
    changeEmail (newEmail) {
        // Check to make sure there's an @ symbol
        if (!newEmail.includes("@")) {
            throw new Error("Must be a valid email")
        }
        this.email = newEmail
    },

    updatePassword(oldPassword, newPassword, confirmNew) {
        // Confirm old password matches
        if (this.password !== oldPassword) {
            throw new Error("Please provide your current password")
        }
        if (newPassword !== confirmNew) {
            throw new Error("New password does not match")
        }
        if (newPassword.length < 7){
            throw new Error("Your password is too short")
        }
        this.password = newPassword
    }

}

// Read values
console.log(user.username); // Dot Notation
console.log(user["password"]); // Bracket Notation
console.log(user)

// Update values
user.changeEmail('test')
user.changeEmail("test@test.com")
console.log(user)

// Bad practice, we're avoiding security checks
// user.password = 'password'

// Good Practice of updating values
user.updatePassword("fanged543", "coi198", "Coi983")
user.updatePassword("Fanged123", "Coi289", "Coi993")
user.updatePassword("Fanged123", "Coi189", "Coi189")
user.updatePassword("Fanged123", "Coiled189", "Coiled189")
console.log(user)

// Getting all the keys and values of an object
console.log(Object.values(user))
console.log(Object.keys(user))

// Ban a user
Object.freeze(user)
// user.changeEmail("not@possible.com")
// user.email = "wont@com.com"
console.log(user)

// Unban a user
const unbannedUser = Object.assign({}, user)

unbannedUser.changeEmail('unbanned@change.com')
console.log(unbannedUser)