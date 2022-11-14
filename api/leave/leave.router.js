const {
  create,
  getLeaves,
  getLeaveById,
  updateLeave,
} = require("./leave.controller");

//const { getChurchById } = require('./church.service');
//const { getChurch } = require('./church.service');
//const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();
router.post("/", create);
router.get("/", getLeaves);
router.get("/:id", getLeaveById);
router.patch("/", updateLeave)

module.exports = router