import { useState } from "react"
import Banner from "./Components/Banner/Banner"
import Header from "./Components/Header/Header"
import Recipe_Header from "./Components/Recipe_Header/Recipe_Header"
import Recipes from "./Components/Recipes/Recipes"
import Want_to_cook from "./Components/Want_to_cook/Want_to_cook"

function App() {

  const [wantToCook, setWantToCook] = useState([]);

  const handleWantToCook = recipe =>{
    console.log("add");
    console.log(recipe);
    // const newWantToCook = 
  }

  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <Recipe_Header></Recipe_Header>
    <main className="mx-5">
    <Recipes handleWantToCook={handleWantToCook}></Recipes>
    <Want_to_cook></Want_to_cook>
    </main>
    </>
  )
}

export default App
