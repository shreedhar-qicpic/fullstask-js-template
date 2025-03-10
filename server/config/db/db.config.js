const { Pool } = require("pg");

const dbPool = new Pool();

dbPool.on("connect", () => {
  console.log("INFO =>", `DATABASE CONNECTED`);
});

dbPool.on("error", (err) => {
  console.log("ERROR =>ERROR CONNECTING DATABASE", err?.message);
});

module.exports = { dbPool };
