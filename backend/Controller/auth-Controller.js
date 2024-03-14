import User from "../Models/user-model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const logIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    // combine check user exist and check password is correct
    const foundUser = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      foundUser.password || ""
    );
    if (!isPasswordCorrect || !foundUser) {
      return res.status(402).json({ error: "Invalid username or password !" });
    }

    const { password: ps, ...rest } = foundUser._doc;
    generateTokenAndSetCookie(foundUser._id, res);
    return res.status(200).json(rest);
  } catch (e) {
    console.log("Error in login controller", e.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logOut = (req, res) => {
  try {
    res.clearCookie("jwt");
    return res.status(200).json({ message: "Logout successfully !" });
  } catch (e) {
    console.log("Error in logout controller");
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const signUp = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    // check if the confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password doesn't match !" });
    }
    // check if the username exist
    const createdUser = await User.findOne({ username });
    if (createdUser) {
      return res
        .status(400)
        .json({ error: "User exist ! Please change another username ." });
    }
    // hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);
    // save the User
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyPic : girlPic,
    });
    const savedUser = await newUser.save();
    // Sign JWT and Send Cookie
    // exclude the password
    const { password: ps, ...rest } = savedUser._doc;

    return res.status(201).json(rest);
  } catch (e) {
    console.log("Error in signup controller", e.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
