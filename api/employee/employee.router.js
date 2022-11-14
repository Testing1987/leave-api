const {
  create,
  getEmployee,
  getEmployeeById,
  updateEmployee,
  getEmployeeByName,
} = require("./employee.controller");
//const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();
router.post("/", create);
router.get("/", getEmployee);
router.get("/:id", getEmployeeById);
router.patch("/", updateEmployee);
//router.get("/email/:email", checkToken, getPeopleByEmail);
router.get("/name/:name", getEmployeeByName);

module.exports = router;
