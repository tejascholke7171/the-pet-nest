const express = require("express");
const app = express();
const cors = require("cors");
const {userModel, feedbackModel} = require("./database");

app.use(express.json());
app.use(express.urlencoded())
app.use(cors());

app.post("/signup", async (req,res) => {
    try {
        const usr = await userModel.findOne({email: req.body.mail, username: req.body.username});
        if(usr){
            return res.json({status: false, msg: "User Already Exist!"});
        }
        const user = await userModel.create(req.body);
        res.json({status: true, msg: "User created successfully"});
    } catch (error) {
        console.log(error)
        res.json({status: false, msg: "Something Went Wrong"});
    }
})

app.post("/login", async (req,res) => {
    try {
        const usr = await userModel.findOne({username: req.body.username});
        if(!usr){
            return res.json({status: false, msg: "User does not exist please signUp first"});
        }
        if (usr.password === req.body.password) {
            res.json({status: true, msg: "Loged In Successfully"});
        } else {
            res.json({status: false, msg: "Wrong Password"});
        }
        
    } catch (error) {
        console.log(error)
        res.json({status: false, msg: "Something Went Wrong"});
    }
})
app.post("/contact", async (req,res) => {
    try {
        const feedback = await feedbackModel.create(req.body);

        if (feedback) {
            res.json({status: true, msg: "Message sent successfully!"});
        } else {
            res.json({status: false, msg: "Unable to send message please fill data properly!"});
        }
        
    } catch (error) {
        console.log(error)
        res.json({status: false, msg: "Something Went Wrong"});
    }
})


app.listen(8080,() => {
    console.log("Server started at port 8080");
})