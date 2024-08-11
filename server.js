const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req-body
const PersonRouter = require("./routes/PersonRoutes") 
const MenuItemRouter = require("./routes/MenuItemsRoutes");


app.get("/", function (req, res) {
  res.send("Welcome to Chicken Darbar Restaurant🙏🏻");
});



app.use("/person", PersonRouter);
app.use("/menu-item", MenuItemRouter);


app.listen(PORT, () => {
  console.log(`server is running  on port ${PORT}`);
});
