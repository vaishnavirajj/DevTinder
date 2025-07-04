// Why Middleware is important

const  express =require("express");
const app = express();

const {adminAuth , userAuth} =require=("./middlewares/auth")
//Handle Authe Middleware for all requests GET , POST , DELETE..........
app.use ("/admin" , adminAuth);

app.get("/user" ,  userAuth , (req,res) => {
    res.send("User Data Sent");
});

app.get("/admin/getAllData" ,(req,res) => {
    res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req,res) => {
    //Logic of checking if the request is authorized
    res.send("Delete a user");
});


app.listen(7777, ()=> {
    console.log("Server is successfully listening on port 7777...");
    
})
