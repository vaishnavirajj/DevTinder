// //Error Handlers

// const express = require("express");
// const app=express();

// app.get("/getUserData" , (req,res) => {
//    try{
//     //Logic of DB call and get user data
//     throw new Error("dvbzhjk");
//     res.send("User Data Sent");
// }

//    catch(err) {
//     res.send(500).send('Some Error contact support team');

//    }
// });

// app.use("/" , (err , req , res,next) => {
//     if (err) {
//         res.status(500).send("something went wrong");
//     }
// });
                                                                       
// app.listen(7777 , ()=>{
//     console.log("Server is successfully listening on port 7777...");
// });