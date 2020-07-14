/**
 *      initials: "JD",
        name: "... anyone yet?",
        mail: "",
        color: "Random",
 */

const HANDLE_MATCH = (req, res, next) => {
  console.log(req.body);
  res
    .status(200)
    .send({ initials: "JD", name: "John Doe", mail: "John@donym.com", color: "Random" });
};

module.exports = HANDLE_MATCH;
