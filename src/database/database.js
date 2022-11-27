const mongoose = require("mongoose");

const database = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUniFiedTopology: true,
    })
    .then((res) =>
      console.log(`DB_Connected with port ${process.env.APP_PORT}`)
    );
};

module.exports = database;
