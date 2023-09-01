const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  // Validate request body
  if (!req.body.email || !req.body.password) {
    return res.status(400).send("Username and password are required");
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const user = new User({
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    // Save the user to the database
    await user.save();
    res.status(201).send("User created");
  } catch (err) {
    res.status(500).send(err);
  }
};
