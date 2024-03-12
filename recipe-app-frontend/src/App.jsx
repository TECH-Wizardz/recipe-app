import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Homepage from "./pages/Homepage";
import RecipePage from "./pages/RecipePage";
import EditRecipePage from "./pages/EditRecipePage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/RecipePage/:recipeId" element={<RecipePage />} />
          <Route
            path="/EditRecipePage/:recipeId"
            element={<EditRecipePage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
