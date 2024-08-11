const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req-body
const PersonRouter = require("./routes/PersonRoutes") 
const MenuItemRouter = require("./routes/MenuItemsRoutes");


app.get("/", function (req, res) {
  res.send("Welcome to Chicken Darbar Restaurant🙏🏻");
});



app.use("/person", PersonRouter);
app.use("/menu-item", MenuItemRouter);











app.listen(port, () => {
  console.log(`server is running  on port ${port}`);
});
