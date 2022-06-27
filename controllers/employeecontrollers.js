
const express=require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Employee = mongoose.model("Employee")
router.get("/",(req,res)=>{
    res.render("employee/addOrEdit",
    {viewTitle:"InsertEmployee"})
});
router.post('/',(req,res)=>{
    insertEmployees(req,res)
})

function insertEmployees(req,res){
    const emp=new Employee();//creating an Object
 
    emp.fullname=req.body.fullname;
    emp.email=req.body.email;
    emp.phone = req.body.phone;
    emp.city=req.body.city;
    emp.save((err,doc)=>{
        if(!err){
            res.redirect("employee/list")
        }
        else{
            console.log("errors during log",err)
        }
    });
}

router.get("/list",function(req,res){
    Employee.find((err,doc)=>{
        if(!err){
            res.render("employee/list",{
                list:doc
            });

        }else{
            console.log("error during log",err)
        }
    })
});
     router.get('/delete/:id', (req, res) => {
        Employee.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) {
                res.redirect('/employee/list');
            }
            else { console.log('Error in employee delete :' + err); }
        });
    });


module.exports = router;