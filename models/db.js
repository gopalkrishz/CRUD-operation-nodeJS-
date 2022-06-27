//module for connections
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/employeeDB",{useNewUrlParser:true},(err)=>{
    if(err){
        console.log("there is an error", err)
    }else{
        console.log("the connection is succeeded")
    }
})
require('./employees.model');