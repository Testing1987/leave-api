const express = require("express");
const connect = require("./config/db.js");
//module.exports = router;
const router = express.Router();

const employeeRouter = require("./api/employee/employee.router");
const leaveRouter = require("./api/leave/leave.router");

require("dotenv").config();
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api/employee", employeeRouter);
app.use("/api/leave", leaveRouter);
// app.use("/api/users/login", (req, res) => {
//   res.send({
//     token: "test123",
//   });
// });

app.listen(process.env.APP_PORT, () => {
  console.log(`server running on port ${process.env.APP_PORT}`);
});

module.exports = router;
