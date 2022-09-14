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

async function authUser(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        // 401 - unauthorized
        return res.status(401).json({ message: "No token, authorization denied" });
    }
    try {
        const decoded = jwt.verify(token, "secret");
        req.user = decoded.user;
        console.log(req.user);
        next();
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: "Token is not valid" });
    }

}





module.exports = {
    registerUser,
    logInUser,
    authUser,
};