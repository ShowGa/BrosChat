import jwt from "jsonwebtoken";
import User from "../Models/user-model.js";

const protectRoute = async (req, res, next) => {
  try {
    // check token exist
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorize ! Please login again !" });
    }
    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorize ! Invalid token !" });
    }
    // find the user
    const foundUser = await User.findById(decoded.userId).select("-password");
    // set req.user
    req.user = foundUser;

    next();
  } catch (e) {
    console.log("Error in protectRoute middleware !", e.message);
    return res.status(500).json({ error: "Internal server error !" });
  }
};

export default protectRoute;
