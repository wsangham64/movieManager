const app = require("express")();

app.get("/home", (req, res) => {
  res.json({ test: "this is running fine" });
});

app.listen(3010, () => {
  console.log("backend server is running at 3010");
});
