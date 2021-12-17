const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    text:{
        type: String,
        max: 1000
    },
    img:{
        type:String
    },
    likes:{
        type:Array,
        default:[]
    }

},
    {timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema)