let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
let employeeSchema = require("../models/Employee");

router.route("/create-employee").post(async (req, res, next)=>{
    await employeeSchema.create(req.body).
    then((result)=>{
        res.json({
            data:result,
            message:"Data Successfully added",
            status:200,
                })
    }).catch((err)=>{
        returnnex(err);
    })
});
module.exports=router;