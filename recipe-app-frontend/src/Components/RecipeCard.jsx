import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function RecipeCard({ recipe, handleDeleteModelClick, setRecipe }) {
  const deleteButtonClick = (e) => {
    e.preventDefault(); // This prevents the default action of the link (i.e., redirection)
    e.stopPropagation(); // This prevents the click event from propagating to the Link component
    handleDeleteModelClick();
    setRecipe(recipe._id);
  };

  return (
    <div className="  rounded shadow-md overflow-hidden relative hover:transform hover:translate-y-1 hover:scale-105 hover:transition-all ">
      <img
        src={recipe.imgLink}
        className=" w-full max-h-[15rem] object-cover "
      />
      <h3 className="text-black-color text-base font-openSans font-medium m-3">
        {recipe.recipeName}
      </h3>
      <div className="m-3  flex absolute bottom-1 right-1 gap-2  ">
        <Link to={`/EditRecipePage/${recipe?._id} `} state={{ recipe: recipe }}>
          <PencilSquareIcon className="w-5 hover:text-red-color" />
        </Link>
        <TrashIcon
          className="w-5 hover:text-red-color"
          onClick={deleteButtonClick}
        />
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleDeleteModelClick: PropTypes.func.isRequired,
  setRecipe: PropTypes.func.isRequired,
};
export default RecipeCard;
