// if(process.env.NODE_ENV !== "production"){
//   require('dotenv').config()
// }

require("dotenv").config();

// console.log(process.env,`??`);
const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes");
const errorHandle = require("./middleware/errorHandle");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.use(errorHandle)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
