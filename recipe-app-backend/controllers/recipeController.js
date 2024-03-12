const asyncHandler = require("express-async-handler");
const Recipe = require("../models/recipeModel");
//@desc Get all recipes
//@route GET /api/recipes
//@access public

const getRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.find();
  res.status(200).json(recipe);
});

//@desc Create a recipes
//@route Post /api/recipes
//@access public

const postRecipe = asyncHandler(async (req, res) => {
  const { recipeName, ingredients, description, imgLink } = req.body;
  if (!recipeName || !ingredients || !description || !imgLink) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const recipe = await Recipe.create({
    recipeName,
    ingredients,
    description,
    imgLink,
  });
  console.log("the request body:", req.body);

  res.status(200).json(recipe);
});

//@desc Update a recipe
//@route Put /api/recipes/id
//@access public

const updateRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedRecipe = await Recipe.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedRecipe);
});

//@desc Delete a recipe
//@route Delete /api/recipes/id
//@access public
const deleteRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) {
    res.status(404);
    throw new Error("Recipe not found");
  }
  await Recipe.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: `Delete Recipes for ${req.params.id}` });
});

module.exports = { getRecipe, postRecipe, updateRecipe, deleteRecipe };
