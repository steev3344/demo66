const employeeService = require("../services/employeeService");

exports.list = async function (req, res, next) {
  // api for getting all data
  try {
    const { limit } = req.query;
    const { page } = req.query;
    const { filter } = req.query;
    const { sort } = req.query;
    const employee = await employeeService.list(
      parseInt(page),
      parseInt(limit),
      filter,
      sort
    );
    return res.status(200).json(employee);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
// api for getting data using id

exports.show = async function (req, res, next) {
  const id = req.params.id;

  try {
    const employee = await employeeService.show(id);
    return res.status(200).json({ data: employee });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// api for posting
exports.create = async function (req, res, next) {
  const { employee } = req.body;
  try {
    const data = await employeeService.create(employee);
    return res.status(200).json({ data: data });
  } catch (e) {
    console.log(e);
    return res.status(422).json({ status: 422, message: e.message });
  }
};
// api for update
exports.update = async function (req, res, next) {
  const id = req.params.id;
  const { employee } = req.body;

  try {
    const data = await employeeService.update(id, employee);
    return res.status(200).json({ data: data });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
// api for delete
exports.delete = async function (req, res, next) {
  const id = req.params.id;

  try {
    await employeeService.delete(id);

    return res.status(204).json();
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
