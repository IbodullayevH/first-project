let { Pool } = require(`pg`);

let pool = new Pool({
  connectionString: "postgres://postgres:8077@localhost:5432/project_1",
});

const fetch_data = async (query, ...params) => {
  let client = await pool.connect();

  try {
    let { rows } = await client.query(query, params.length ? params : null);
    return rows;
  } catch (error) {
    console.error("Errror fetch dataniki", error);
  } finally{
    client.release()
  }
};


module.exports = fetch_data
