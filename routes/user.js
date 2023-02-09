const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const router = express.Router();


//Model
const models = require("../models");

//All users
router.get("/", (req, res) => {
  models.User.findAll()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
});

//  Create User
router.post("/create-user", async (req, res) => {
  const result = req.body;
  console.log(result);

  const user_name = models.User.create({
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  })
    .then((user) => res.redirect("/"))
    .catch((err) => res.render("error", { error: err.message }));
});
//update users
router.get("/update", (req, res) => {
 models.User.update({ lastName: "ta" }, {
  where: {
    lastName: "Taneja"
  }})
  models.User.findAll()
    .then((user) => {
      res.json(user);
    })
});

// delete user and then show remaining data in postman body
router.get("/:id", (req, res) => {
  models.User.destroy({ 
  where: {id : req.params.id},
})
 models.User.findAll()
    .then((user) => {
      res.json(user);
    })
});


module.exports = router;