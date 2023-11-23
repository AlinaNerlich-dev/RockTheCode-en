const { verifyToken } = require("../config/jwt");

const isAuthenticated = (req, res, next) => {
  const { token } = req.query;
  if (token === process.env.QUERY_SECRET_TOKEN) {
    next();
    return;
  } else {
    res.status(401).json({ data: "Incorrect token authentication" });
  }
};

const hasValidJWTToken = (req, res, next) => {
  try {
    console.log(req.headers);
    const { authorization } = req.headers;
    const [, token] = authorization.split(" ");
    console.log(`Taken from authorization headers: ${token}`);
    // const { token } = req.query;
    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (err) {
    res.status(401).json({ data: "Not Authenticated" });
  }
};

module.exports = { isAuthenticated, hasValidJWTToken };
