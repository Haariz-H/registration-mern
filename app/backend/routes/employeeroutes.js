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
      return next(err);
    });
});

router.route("/").get(async (req, res, next) => {
  const page_size = 5;
  const page = parseInt(req.query.page || "0");
  const totalRecords = await employeeSchema.countDocuments({});
  await employeeSchema
    .find()
    .limit(page_size)
    .skip(page_size * page)
    .then((result) => {
      res.json({
        data: result,
        total: Math.ceil(totalRecords / page_size),
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
router.route("/get-employee/:id").get(async (req, res, next) => {
  await employeeSchema
    .findById(req.params.id)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully fetched",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
router.route("/update-employee/:id").put(async (req, res, next) => {
  await employeeSchema
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((result) => {
      res.json({
        data: result,
        msg: "data Successfully updated",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
