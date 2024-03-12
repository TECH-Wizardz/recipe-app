const express = require("express");
const router = express.Router();
const {
  getRecipe,
  postRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

router.route("/").get(getRecipe).post(postRecipe);

router.route("/:id").put(updateRecipe).delete(deleteRecipe);

module.exports = router;
