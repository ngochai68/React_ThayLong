const mysql = require("mysql2/promise");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "laptop_react",
};

const pool = mysql.createPool(dbConfig);

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Kết nối cơ sở dữ liệu thành công!");
    connection.release();
  } catch (error) {
    console.error("Không thể kết nối tới cơ sở dữ liệu:", error);
  }
}

module.exports = {
  pool,
  testConnection,
};
