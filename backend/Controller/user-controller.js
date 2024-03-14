import User from "../Models/user-model.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    // get all the user
    const filteredUser = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    return res.status(200).json(filteredUser);
  } catch (e) {
    console.log("Error in geting user", e.message);
    return res.status(500).json({ error: "Internal server error !" });
  }
};
