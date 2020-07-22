/**
 *      initials: "JD",
        name: "... anyone yet?",
        mail: "",
        color: "Random",
 */

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./store/db.json");
const db = low(adapter);

const random = require("random");

const HANDLE_MATCH = (req, res, next) => {
  const reqDepartment = req.body.department;

  let partners = db.get("partner").value();

  const onlyOtherDepartments = partners.filter((el) => {
    if (el.differentDepartmentOnly) {
      if (el.differentDepartmentOnly && el.department !== reqDepartment) {
        return el;
      }
    } else {
      return el;
    }
  });

  const randomNumber = random.int((min = 0), (max = onlyOtherDepartments.length - 1));

  const randomPartner = onlyOtherDepartments[randomNumber];

  const payload = {
    name: randomPartner.name,
    mail: randomPartner.mail,
  };

  res.send(payload);
};

module.exports = HANDLE_MATCH;
