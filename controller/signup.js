/**
 * name: "",
        mail: "",
        department: "Marketing",
        departmentPool: [
          {
            id: 1,
            value: "Marketing",
          },
          {
            id: 2,
            value: "Production",
          },
          {
            id: 3,
            value: "CIT",
          },
          {
            id: 4,
            value: "Purchasing",
          },
        ],
        agreedToBeFound: false,
        differentDepartmentOnly: true,
        weeklySignup: false,
 */

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./store/db.json");
const db = low(adapter);

const HANDLE_SIGNUP = (req, res, next) => {
  db.defaults({ partner: [] }).write();

  const singlePartner = req.body;

  db.get("partner").push(singlePartner).write();

  console.log(req.body);
  res.status(200).send({ msg: "You've been added to the DB!" });
};

module.exports = HANDLE_SIGNUP;
