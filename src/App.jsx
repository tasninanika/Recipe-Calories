import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Recipe_Header from "./Components/Recipe_Header/Recipe_Header";
import Recipes from "./Components/Recipes/Recipes";
import Want_to_cook from "./Components/Want_to_cook/Want_to_cook";

function App() {
  const [wantToCook, setWantToCook] = useState([]);

  const handleWantToCook = (recipe) => {
    const isAlreadyAdded = wantToCook.find((item) => item.recipe_name === recipe.recipe_name);

    if (!isAlreadyAdded) {
      const newWantToCook = [...wantToCook, recipe];
      setWantToCook(newWantToCook);
    }
  };

  const handleRemoveRecipe = (recipe) => {
    const updatedList = wantToCook.filter((item) => item.recipe_id !== recipe.recipe_id);
    setWantToCook(updatedList);
  };

  return (
    <>
      <Header />
      <Banner />
      <Recipe_Header />
      <main className="md:flex max-w-7xl mx-auto gap-5">
        <Recipes handleWantToCook={handleWantToCook} wantToCook={wantToCook} />
        <Want_to_cook wantToCook={wantToCook} handleRemoveRecipe={handleRemoveRecipe} />
      </main>
    </>
  );
}

export default App;
