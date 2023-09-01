const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firsName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String, default: null },
});

module.exports = mongoose.model("User", userSchema);
