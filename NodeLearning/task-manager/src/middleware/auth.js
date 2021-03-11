const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error("throw error");
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = auth;

// Express middle ware
// app.use((req, res, next) => {
//   if (req.method === "GET") res.send("Get requests are disabled");
//   else {
//     next();
//   }
// });

// Express middle ware to send service unavailable 500 to client
// app.use((req, res, next) => {
//   res.status(503).send("Please check after sometime!!!");
// });
