require("./models/db")
const express = require("express")
const bodyparser = require("body-parser")
const path=require("path")
const exphbs=require("express-handlebars")
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const app=express()
const handlebars=require("handlebars");
const employeerouter = require("./controllers/employeecontrollers")
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use("/employee",employeerouter);
app.set("views",path.join(__dirname,"/views/"));
app.engine("hbs",exphbs.engine({
    extname:"hbs",
    defalutLayout:"main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
    layoutsDir:__dirname+"/views/layouts"
}));
app.set("view engine","hbs");





app.listen(3000,()=>{
    console.log("the server starts at port 3000")
})