const router = require("express").Router()
const User = require("../Models/User")
const bcrypt = require("bcrypt")

router.get("/", (req,res)=> {
    res.send("THis is the auth api")
})

//Register a new User
router.post("/register", async (req,res) => {
    
    try{
        //Generate hashed password.
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(req.body.password, salt);
        
        // create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPass
        })

        
        const user = await newUser.save();
        res.status(200).json(user);

    } catch (err){
        res.status(500).json(err);
    }
    
})


//Login Request
router.post("/login", async (req,res) => {
    try{
        const user = await User.findOne({email:req.body.email});
        (!user) && res.status(404).json("User is not Present");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        (!validPassword) && res.status(400).json("Please enter correct password.");

        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router