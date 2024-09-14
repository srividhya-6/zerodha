require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  try {
    const token = jwt.sign({ id }, process.env.TOKEN_KEY, {
      expiresIn: '3d', // Alternatively, you can use seconds (3 * 24 * 60 * 60)
    });
    console.log("Token created successfully:", token);
    return token;
  } catch (error) {
    console.error("Error creating JWT token:", error);
    throw error;
  }
};