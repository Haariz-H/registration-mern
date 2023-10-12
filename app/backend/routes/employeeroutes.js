let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
let employeeSchema = require("../models/Employee");

router.route("/create-employee").post(async (req, res, next) => {
  await employeeSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data Successfully added",
        status: 200,
      });
    })
    .catch((err) => {
      returnnex(err);
    });
});

router.route("/").get(async (req, res, next) => {
  await employeeSchema
    .find()
    .then((result) => {
      res.json({
        data: result,
        message: "All items successfully fetched",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
router.route("/delete-employee/:id").delete(async (req, res, next) => {
  await employeeSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data Successfully updated",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
