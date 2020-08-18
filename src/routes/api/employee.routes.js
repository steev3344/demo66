const express = require("express");
const router = express.Router();

const employeeController = require("../../controllers/employee.controller");

// get all data
router.get("/", employeeController.list);
// get data using id
router.get("/:id", employeeController.show);
// post data
router.post("/create", employeeController.create);
// update data using id
router.put("/:id", employeeController.update);
// delete data using id
router.delete("/:id", employeeController.delete);

module.exports = router;
