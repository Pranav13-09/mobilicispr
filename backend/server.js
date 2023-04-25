const app = require("./app");

const Port = process.env.PORT || 80;
const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config({ path: "backend/config/config.env" });
const corsOptions = {
  origin: "https://mobi-frontend.vercel.app",
  methods: ["GET", "POST"],
};
app.use(cors(corsOptions));

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
