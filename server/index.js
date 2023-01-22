const app = require("express")();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sangham:sangham@moviemanager.islq29p.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((e) => console.log("error while connectirng the database ", e));

app.get("/home", (req, res) => {
  res.json({ test: "this is running fine" });
});

app.listen(3010, () => {
  console.log("backend server is running at 3010");
});
