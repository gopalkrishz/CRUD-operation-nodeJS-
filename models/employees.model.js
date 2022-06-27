const mongoose=require("mongoose")
const EmployeeSchema=new mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    city:{
        type:String
    
    }

});
mongoose.model("Employee",EmployeeSchema);