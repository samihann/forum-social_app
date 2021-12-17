const router = require("express").Router();
const Post = require("../Models/Post")
const User = require("../Models/User")

//create a post
router.post("/create",async (req,res)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json("THe post is saved")


    }catch(err){
        res.status(500).json(err);
    }
})

// Edit a post
router.put("/:postId/edit",async (req,res)=>{
    try{
    const post = await Post.findById(req.params.postId)
    if(post.userId === req.body.userId){
        await post.updateOne({$set: req.body});
        res.status(200).json("The post is updated");

    } else{
        res.status(403).json("User is not owner of post")
    }
    }catch(err){
        res.status(500).json(err);
    }
})


// delete a post
router.delete("/:postId/delete",async (req,res)=>{
    try{
    const post = await Post.findById(req.params.postId)
    if(post.userId === req.body.userId){
        await post.deleteOne();
        res.status(200).json("The post is deleted");

    } else{
        res.status(403).json("User is not owner of post")
    }
    }catch(err){
        res.status(500).json(err);
    }
})

//like a post
router.put("/:postId/like",async (req,res)=>{
    try{
        const post = await Post.findById(req.params.postId)
       if(!post.likes.includes(req.body.userId))
       { 
        console.log("3")
           await post.updateOne({$push: {likes: req.body.userId}});
            res.status(200).json("The post is liked by the user");
        }
        else{
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json("The post is disliked by the user");
        }
    }catch(err){
        res.status(500).json(err);
    }
})

//get a post
router.get("/:postId",async (req,res)=>{
    try{
        const post = await Post.findById(req.params.postId)
        res.status(200).json(post)
    }catch(err){
        res.status(500).json(err);
    }
})

//get all following user's post
router.get("/user/timeline",async (req,res)=>{
    let postArray = [];

    try{
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.following.map((friendId) => {
                return Post.find({ userId: friendId})
            })
        );
        console.log(friendPosts);
        res.status(200).json(userPosts.concat(...friendPosts));
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;