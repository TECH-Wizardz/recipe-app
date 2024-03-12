import axios from "axios";
import PropTypes from "prop-types";
function DeleteRecipeModel({ handleDeleteModelClick, recipeId }) {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5001/api/recipes/${recipeId}`
      );
      console.log("Delete request successful:", response.data);
      // Handle success
    } catch (error) {
      console.error("Error making delete request:", error);
      // Handle error
    }

    handleDeleteModelClick();
  };
  return (
    <div className="w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed bg-overlay-color z-50">
      <div className="max-w-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded bg-white-color p-5">
        <p>Are you sure you want to delete the recipe?</p>
        <div className="flex gap-4 w-full p-3 justify-center mt-5">
          <button
            className="py-2 px-4 rounded text-white-color bg-red-color text-base font-bold"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button
            className="py-2 px-4 rounded text-white-color bg-dark-grey-color text-base font-bold"
            onClick={handleDeleteModelClick}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
DeleteRecipeModel.propTypes = {
  handleDeleteModelClick: PropTypes.func.isRequired,
  recipeId: PropTypes.string.isRequired,
};
export default DeleteRecipeModel;
