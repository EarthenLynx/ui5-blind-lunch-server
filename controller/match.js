/**
 * @model lunchUserMatch
 * 
 *      initials: "JD", // Not considered
        name: "... anyone yet?",
        mail: "",
        department: "",
        color: "Random",
 */

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const random = require("random");

const adapter = new FileSync("./store/db.json");
const db = low(adapter);

const HANDLE_MATCH = (req, res, next) => {
  const reqDepartment = req.body.department;

  let partners = db.get("partner").value();

  let diffPartners = [];
  partners.forEach((el) => {
    if (el.differentDepartmentOnly && el.department === reqDepartment) {
      return;
    } else {
      diffPartners.push(el);
    }
  });

  const randomNumber = random.int((min = 0), (max = diffPartners.length - 1));

  const randomPartner = diffPartners[randomNumber];

  const payload = {
    name: randomPartner.name,
    mail: randomPartner.mail,
    department: randomPartner.department,
  };

  res.send(payload);
};

module.exports = HANDLE_MATCH;
