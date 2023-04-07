const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");
// const {
//   registerUser,
//   authUser,
//   //   allUsers,
// } = require("../controllers/userControllers");
// const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// router.route("/").post(registerUser).get(protect, allUsers);
router.route("/").post(registerUser);
router.route("/login").post(authUser);
// router.route("/login", authUser);

module.exports = router;
