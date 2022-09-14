const user = require("./User.mongo");

// create example user
// const newUser = new user({
//     name: "John Doe",
//     username: "johndoe",
//     email: "johndoe@hotmail.com",
//     password: "123456",
//     avatar: "https://cdn-icons-png.flaticon.com/512/1160/1160040.png",
//     followers: null,
//     following: null,
//     bio: "No bio",
// });


// save example user
async function saveUser(user) {
    try {
        await user.save();
        console.log("User saved");
    } catch (e) {
        console.log(e);
    }
}



module.exports = {
    saveUser,
   
};