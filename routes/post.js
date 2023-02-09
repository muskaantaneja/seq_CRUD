const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const router = express.Router();
var sequelize = require("sequelize");

//Models
const models = require("../models");

// Create post
router.post("/create-post", async (req, res) => {
  const result = req.body;
  console.log(result);

  const user_name = models.Post.create({
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  })
  .then((success) => res.redirect("/post"))
    .catch((err) => res.render("error", { error: err.message }));
});

//get post
router.get("/", (req, res) => {
  models.Post.findAll()
    .then((posts) => {
      res.json({
        success: true,
        message: "Your post was created successfully!",
        data: {
          posts,
        },
      });
    })
    .catch((err) => console.log(err));
});

//Update post
router.post("/:id", async (req, res) => {
    models.Post.update(
    { id: req.body.id },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    res.send("Updated");
});

// Delete post
router.get("/:id", async (req, res) => {
    
  models.Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((success) => res.send("Deleted"))
    .catch((err) => res.render("error", { error: err.message }));
});

module.exports = router;