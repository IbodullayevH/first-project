const fetch_data = require("../utils/postgre_logic");

const verify_users = async(req, res, next) => {
    const site_users = await fetch_data("Select * from site_users")
    const check_user = site_users.find(el => el.length > 0)
    next()

    
}
 

module.exports = verify_users