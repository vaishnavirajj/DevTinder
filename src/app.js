const express = require("express");
const app =express();

//request handler
app.use((req , res) => {
    res.send("hello from the server!");
})

app.use("/home" ,(req,res)=> {
    res.send("You are at Home route server");
    

})
app.listen(3000 , () => {
    console.log("Server is running on port 3000");
     
});