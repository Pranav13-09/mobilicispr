const app = require("./app");

const Port = process.env.PORT || 80;
// const dotenv = require("dotenv");

// dotenv.config({ path: "backend/config/config.env" });

require("dotenv").config();

process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.msg}`);
  console.log("shutting down the server due to uncaught exception");
  app.close(() => {
    process.exit(1);
  });
});

const connection = require("./config/database");

connection();

app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});
