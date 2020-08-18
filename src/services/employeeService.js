const Employee = require("../models/employee.model");
const pagination = require("../util/pagination");
// service for get all  data
exports.list = async function (page, limit, filter, sort) {
  try {
    const employee = await pagination.paginate(
      page,
      limit,
      filter,
      sort,
      Employee
    );
    return employee;
  } catch (e) {
    throw Error("Error while getting all data  ");
  }
};
// service for get data using id
exports.show = async function (id) {
  try {
    const employee = await Employee.findById(id);
    return employee;
  } catch (e) {
    throw Error("Error while finding data with ID ");
  }
};
// service for post data
exports.create = async function (employee) {
  try {
    const dat = await new Employee(employee);

    await dat.save();

    return dat;
  } catch (error) {
    console.log(error);
    throw Error("Error while Posting data ");
  }
};
// service for update data using id
exports.update = async function (id, employee) {
  try {
    const dat = await Employee.findByIdAndUpdate(id, employee, { new: true });
    return dat;
  } catch (error) {
    throw Error("Error while updating data ");
  }
};
// service for delete data using id
exports.delete = async function (id) {
  try {
    await Employee.findByIdAndRemove(id);
  } catch (error) {
    throw Error("Error while deleting data");
  }
};
