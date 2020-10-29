const mysql = require("mysql");
const config = require("config");

const connectDB = mysql.createConnection({
    host:config.get("host"),
    user: config.get("user"),
    password: config.get("password"),
    database: config.get("database"),
});

connectDB.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySQL Connected...")
});

module.exports = connectDB;