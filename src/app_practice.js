// const express = require("express");
// const app =express();

// //request handler
// // app.use((req , res) => {
// //     res.send("hello from the server!");
// // })


// //Order of routes matter alot

// //this will match all the HTTP method API calls to /home
// app.use("/home" ,(req,res)=> {
//     res.send("You are at Home route server");
    

// });

// app.use("/hello" ,(req,res)=> {
//     res.send("hello hello");
    

// });


// //This will only handle get call to /user
// app.get ("/user", (req,res) => {
//     res.send({FirstName:"Vaishnavi", LatName:"Raj"});
// });


// app.post("/user" ,(req,res) => {
//     //write logic of saving data to DB here
//     res.send("Data successfully saved to the database!");
// });

// app.delete("/user" , (req,res) => {
//     //write logic of deleting data from DB here
//     res.send("Data successfully deleted from the database!");
// });


// app.get("/user" , (req ,res) => {
//     console.log(req.query);
//     res.send("hahahhahaha");
    
// })


// //Dynamic routes
// app.get("/user/:userId:name/:password" , (req,res) => {
//     console.log(req.params);
//     res.send({firstName: "Akshay" ,lastName:"Saini"});
    
// });

// app.listen(3000 , () => {
//     console.log("Server is running on port 3000");
     
// });