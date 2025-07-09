const mongoose = require('mongoose');

//connecting to cluster

const connectDB = async () => {
    await mongoose.connect(
    "mongodb+srv://devTinder:devTinder@namastenodejs.eeiqiqv.mongodb.net/devTinder"
);
};


module.exports=connectDB;

