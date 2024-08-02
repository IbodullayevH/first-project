const cookieParser = require("cookie-parser");
const express = require(`express`);
require(`dotenv`).config();
const app = express();
const path = require(`path`);
const rout = require("./routes/server_routes");


// servers port
const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), "src", "public")));
// app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// rout 
app.use(rout)


//  serverni ishga tushirish
app.listen(SERVER_PORT, () => {
  console.log(`This is 👉 ${SERVER_PORT} - port is start 🏃‍♂️`);
});
