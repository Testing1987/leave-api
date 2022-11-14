const pool = require("../../config/db.js");

module.exports = {
  create: (data, callback) => {
    console.log(data);
    const sql = `insert into leave(sick_leave,paid_leave,unpaid_leave,casual_leave,maternity_leave) values(?,?,?,?,?)`;
    pool.query(
      sql,
      [
        data.sick_leave,
        data.paid_leave,
        data.unpaid_leave,
        data.casual_leave,
        data.maternity_leave,
      ],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getLeaves: (callback) => {
    const sql = `select * from leaves_db.leave`;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getLeaveByEmpId: (emp_id, callback) => {
    const sql = `select * from leave where emp_id=?`;
    pool.query(sql, [emp_id], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updateLeave: (data, callback) => {
    const sql = `update leave set first_name=?, middle_name=?, last_name=?, gender=?, designation=?, joining_date=? where emp_id=?`;
    pool.query(
      sql,
      [
        data.emp_id,
        data.sick_leave,
        data.paid_leave,
        data.unpaid_leave,
        data.casual_leave,
        data.maternity_leave,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
