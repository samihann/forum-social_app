const express = require("express");
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true},()=>{
    console.log("Connected to MongoDB")
});

//middleware code
app.use(express.json());
app.use(helmet())
app.use(morgan("common"))

//Defining Routes
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)

// GET Queries.
app.get("/",(req,res)=>{
    res.send("Hello, Welcome to Homepage!")
})

app.listen(8800,()=> {
    console.log("Server is running")
})