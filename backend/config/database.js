const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log("error connecting the database");
      console.log(err);
    });
};

module.exports = connection;
