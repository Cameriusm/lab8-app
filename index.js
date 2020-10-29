const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/todo", require('./routes/todo'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is running"));