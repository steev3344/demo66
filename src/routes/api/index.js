const express = require("express");
// eslint-disable-next-line new-cap
const router = express.Router();
const employeeRouter = require("./employee.routes");
router.use("/employees", employeeRouter);

module.exports = router;
