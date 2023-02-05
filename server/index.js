const app = require("express")();
const mongoose = require("mongoose");
const MovieData = require("./DataBaseDummy/DummyDataBase").movie;
const userData = require("./DataBaseDummy/DummyDataBase").user;
const data = require("./DataBaseDummy/DummyDataBase");
const User = require("./models/User");
const Movie = require("./models/Movie");

mongoose
  .connect(
    "mongodb+srv://sangham:sangham@moviemanager.islq29p.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((e) => console.log("error while connectirng the database ", e));

app.get("/home", (req, res) => {
  // const newUser=new User({})

  //   const newUser = new User(data.user[0]);
  //   newUser
  //     .save()
  //     .then((response) => {
  //       res.json({ status: "user  saved successfully", response });
  //     })
  //     .catch((e) => {
  //       console.log("erroe while saving the user in database :", e);

  //       res.json({ status: "user not saved", data: data.user[0] });
  //     });

  const newMovie = new Movie(data.movie[0]);
  newMovie
    .save()
    .then((response) => {
      res.json({ status: "movie  saved successfully", response });
    })
    .catch((e) => {
      console.log("erroe while saving movie in dtabase :", e);
      res.json({ status: "movie not saved", data: data.movie[0] });
    });
});

app.listen(3010, () => {
  console.log("backend server is running at 3010");
  console.log(data);
});
