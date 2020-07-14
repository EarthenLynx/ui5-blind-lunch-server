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

const HANDLE_SIGNUP = (req, res, next) => {
  console.log(req.body);
  res.status(200).send({ msg: "You've been added to the DB!" });
};

module.exports = HANDLE_SIGNUP;
