// TODO: Show this
const CronJob = require("cron").CronJob;

// Define vars for database
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./store/db.json");
const db = low(adapter);

const clearDb = () => {
  const job = new CronJob("00 00 * * * *", () => {
    db.set("partner", []).write();
    const d = new Date();
    console.log("Database has been cleared at:", d);
  });
  job.start();
};

module.exports = clearDb;
