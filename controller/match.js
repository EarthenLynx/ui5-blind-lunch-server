/**
 *      initials: "JD",
        name: "... anyone yet?",
        mail: "",
        color: "Random",
 */

const HANDLE_MATCH = (req, res, next) => {
  console.log(req.body);
  res.send({ msg: "This is your match, congrats!" });
};

module.exports = HANDLE_MATCH;
