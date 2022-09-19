const User = require("../../models/User/User.mongo");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { saveUser } = require("../../models/User/User.model");


async function registerUser(req, res) {
    const { name, username, email, password } = req.body;
    
    try {
        let user = await User.findOne({ email });
        if (user) {
            // 400 - bad request
            return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }
            

        const newUser = new User({
            name,
            username,
            email,
            password,
        });



        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
        await saveUser(newUser);
        res.status(201).json({ message: "User created" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });

    }
}

async function logInUser(req, res) {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            // 400 - bad request
            return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            // 400 - bad request
            return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
        }
        const payload = {
            user: {
                username: user.username,
            },
        };
       

        jwt.sign(payload, "secret", { expiresIn: 360000 }, (err, token) => {
            


            if (err) throw err;
            res.json({ token });
            res.status(200).json({ 
                message: "User logged in",
                token: {token},
             });
            
        });

       
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}

async function getMyProfile(req, res) {
        const username = req.user.user.username;
    try {
        let user = await User.findOne({ username });
        res.json(user);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}

async function editMyProfile(req, res) {
    const username = req.user.user.username;
    const { name, bio } = req.body;
    try {
        let user = await User.findOne({ username });
        user.name = name;
        user.bio = bio;
        await saveUser(user);
        res.status(200).json({ message: "User updated" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}

async function followUser(req, res) {
    const username = req.user.user.username;
    const usernameToFollow  = req.params.username;
    try {
        let user = await User.findOne({ username });
        let userToFollow = await User.findOne({ username: usernameToFollow });

        if (user.following.includes(userToFollow._id)) {
            return res.status(400).json({ errors: [{ msg: "You already follow this user" }] });
        }
        user.following.push(userToFollow._id);
        userToFollow.followers.push(user._id);
        await saveUser(user);
        await saveUser(userToFollow);
        res.status(200).json({ message: "User followed" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}

async function unfollowUser(req, res) {
    const username = req.user.user.username;
    const  usernameToUnfollow  = req.params.username;
    try {
        let user = await User.findOne({ username });
        let userToUnfollow = await User.findOne({ username: usernameToUnfollow });

        if (!user.following.includes(userToUnfollow._id)) {
            return res.status(400).json({ errors: [{ msg: "You don't follow this user" }] });
        }
       

        user.following.pull(userToUnfollow._id);
        userToUnfollow.followers.pull(user._id);
        await saveUser(user);
        await saveUser(userToUnfollow);
        res.status(200).json({ message: "User unfollowed" });
        

    
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}   


async function getUserProfile(req, res) {
    const username = req.params.username;
    try {
        let user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ errors: [{ msg: "User not found" }] });
        }
        //filter out password and email
        const { password, email, ...userWithoutPassword } = user._doc;
        res.json(userWithoutPassword);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}
async function doIfollowUser(req, res) {
    const username = req.user.user.username;
    const  usernameToCheck  = req.params.username;
    try {

       
        let user = await User.findOne({ username });
        let userToCheck = await User.findOne({ username: usernameToCheck });

       
        
        if (user.following.includes(userToCheck._id)) {
            return res.status(200).json({ message: "yes" });
        }
        res.status(200).json({ message: "no" });
    
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}

async function convertIDtoUser(req, res) {
    const userId = req.params.id;
    try {
        let user = await User.findOne({ _id: userId });
        // filter password and email
        const { password, email, ...userWithoutPassword } = user._doc;
        res.json(userWithoutPassword);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }

}










module.exports = {
    registerUser,
    logInUser,
    getMyProfile,
    editMyProfile,
    followUser,
    unfollowUser,
    getUserProfile,
    doIfollowUser,
    convertIDtoUser,
    
};