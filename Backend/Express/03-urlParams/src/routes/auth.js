const express = require("express");
const router = express.Router();
const { hasValidJWTToken } = require("../middlewares/authentication");
const {
  getUser,
  loginUser,
  registerUser,
} = require("../controllers/userControllers");
const uploadFile = require("../middlewares/uploadFile");
const { updateUserAvatarDB } = require("../repositories/usersFunctions");

router.get("/", hasValidJWTToken, getUser);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.post(
  "/upload-avatar",
  hasValidJWTToken,
  uploadFile.single("avatar"),
  async (req, res, next) => {
    console.log(req.file);
    const { path } = req.file;
    const { id } = req.user;
    await updateUserAvatarDB(id, path);
    //function store file in the database
    res.status(201).json({ data: "success!" });
  }
);

module.exports = router;
