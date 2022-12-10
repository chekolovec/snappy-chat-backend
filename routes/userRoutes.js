const {
  register,
  login,
  setAvatar,
  getAllUsers,
} = require("../controllers/usersController");
const { checkUser } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/", checkUser);
router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.get("/allUsers/:id", getAllUsers);

module.exports = router;
