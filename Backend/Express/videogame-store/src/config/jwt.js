const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30d" });
  return token;
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (err) {
    console.log(err);
    throw new Error("Invalid or expired token");
  }
};

module.exports = { generateToken, verifyToken };
