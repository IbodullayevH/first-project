// Destruction from express package Router mtd
const {Router}  =require(`express`)
const { get_home, postHome } = require("../controllers/home_ctrl")
const { get_registr, post_registr } = require("../controllers/registr_ctrl")
const verify_users = require("../middlewares/verify_user")

const rout = Router()

rout.get("/", get_home)
rout.post("/", postHome)
rout.get("/registr", verify_users, get_registr)
rout.post("/create/user", post_registr)

// module export
module.exports = rout