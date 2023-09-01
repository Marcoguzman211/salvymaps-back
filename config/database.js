const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = () => {
  //Connecting to the database
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    // If the connection is successful, log a success message
    .then(() => {
      console.log("Successfully connected to database");
    })
    // If the connection fails, log an error message and exit the process
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
