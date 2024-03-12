import { useLocation } from "react-router-dom";

function RecipePage() {
  const recipe = useLocation().state?.data; // Safely access the recipe object

  return (
    <div className="bg-light-grey-color p-10 flex flex-col justify-center">
      <div className="  py-4 mx-auto">
        <h1 className="text-4xl font-bold font-openSans text-slate-color mb-5">
          {recipe.recipeName}
        </h1>
        <img
          src={recipe.imgLink}
          className="max-w-[80rem] max-h-[30rem] rounded-md"
        />

        <h3 className="text-2xl mt-10 text-dark-grey-color font-openSans font-bold">
          Ingredients
        </h3>
        <ul className="font-lato mt-5 list-disc ml-10 flex flex-col gap-2 text-mid-grey-color">
          {recipe.ingredients.split(",").map((ingredient, index) => (
            <li key={index}>{ingredient.trim()}</li>
          ))}
        </ul>
        <h3 className="text-2xl mt-5 text-dark-grey-color font-openSans font-bold">
          Description
        </h3>

        <p className="font-lato max-w-prose text-mid-grey-color mt-3 leading-relaxed">
          {recipe.description}
        </p>
      </div>
    </div>
  );
}

export default RecipePage;
