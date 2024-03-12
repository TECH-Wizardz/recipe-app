const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema(
  {
    recipeName: {
      type: String,
      required: [true, "Please add the recipeName"],
    },

    ingredients: {
      type: String,
      required: [true, "Please add the ingredients"],
    },
    description: {
      type: String,
      required: [true, "description"],
    },
    imgLink: {
      type: String,
      required: [true, "imgLink"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
