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

// TODO: Show this
const { jEncrypt } = require("./jEncrypt");

const HANDLE_SIGNUP = (req, res, next) => {
  db.defaults({ partner: [] }).write();

  const singlePartner = JSON.stringify(req.body);

  // TODO: Show this. Before partners are saved, they are encrypted.
  jEncrypt("passwort", singlePartner, (save) => {
    db.get("partner").push(save).write();
    res.status(200).send({ msg: "You've been added to the DB!" });
  });
};

module.exports = HANDLE_SIGNUP;
