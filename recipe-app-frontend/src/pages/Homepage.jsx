import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../Components/RecipeCard";
import DeleteRecipeModel from "../Components/DeleteRecipeModel";
import { Link } from "react-router-dom";
import Pagination from "../Components/UI/Pagination";

function Homepage() {
  const [deleteRecipeModel, setDeleteRecipeModel] = useState(false);
  const [recipiesData, setRecipiesData] = useState(null);
  const [recipeId, setRecipeId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6); // Change this according to your needs

  const handleDeleteModelClick = (id) => {
    setDeleteRecipeModel(true);
    setRecipeId(id);
  };

  useEffect(() => {
    const fetchRecipiesData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/recipes/");
        setRecipiesData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipiesData();
  }, []);

  // Pagination Logic
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipiesData
    ? recipiesData.slice(indexOfFirstRecipe, indexOfLastRecipe)
    : [];
  const totalPages = recipiesData
    ? Math.ceil(recipiesData.length / recipesPerPage)
    : 0;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-light-grey-color p-10 ">
      <div className="max-w-[90rem] py-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
        {currentRecipes.map((recipe) => (
          <Link
            to={`/RecipePage/:${recipe._id}`}
            key={recipe._id}
            state={{ data: recipe }}
          >
            <RecipeCard
              handleDeleteModelClick={() => handleDeleteModelClick(recipe._id)}
              recipe={recipe}
              setRecipe={setRecipeId}
            />
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={paginate}
      />
      {deleteRecipeModel && (
        <DeleteRecipeModel
          handleDeleteModelClick={() => setDeleteRecipeModel(false)}
          recipeId={recipeId}
        />
      )}
    </div>
  );
}

export default Homepage;
