const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        min:3,
        max:30,
        unique: true
    },
    email:{
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password:{
        type: String, 
        required: true,
        min: 5
    },
    profilePicture:{
        type: String,
        default: ""
    },
    coverPicture:{
        type: String,
        default: ""
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    description:{
        type: String,
        max: 100
    },
    city:{
        type: String,
        max: 30
    },
    relationship:{
        type: Number,
        enum: [1,2,3]
    },


},
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema)