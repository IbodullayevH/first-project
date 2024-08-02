const fetch_data = require("../utils/postgre_logic");

// get
const get_registr = async (req, res) => {
  try {
    res.render(`registry`);
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: `Error to get registry:  ${error.message}`,
    });
  }
};

// post
const post_registr = async (req, res) => {
    try {
      let { fullname, userName, email, password } = req.body;
  
      await fetch_data(
        "Insert Into registred_users(fullname, userName, email, password) Values($1, $2, $3, $4)",
        fullname,
        userName,
        email,
        password
      );
      res.redirect("/")

  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: `Error to get registry:  ${error.message}`,
    });
  }
};



// export modules
module.exports = {
  get_registr,
  post_registr
};
