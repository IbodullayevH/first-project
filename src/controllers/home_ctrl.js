const fetch_data = require("../utils/postgre_logic");

// get
const get_home = async (req, res) => {
  try {
    const product_file = await fetch_data("Select * from products")
    const categorys_file = await fetch_data("Select * from categorys")
    res.render(`home`, {product_file, categorys_file});
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: `Error to get Home:  ${error.message}`,
    });
  }
};

const postHome = async(req, res) => {
  try {
    let name = new_name
    await fetch_data("Insert Into site_users(name) Values($1)", name)
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: `Error to get Home:  ${error.message}`,
    });
  }
}


// export modules
module.exports = {
  get_home,
  postHome
};
