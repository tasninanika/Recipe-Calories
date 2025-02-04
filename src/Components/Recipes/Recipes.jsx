import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import { useEffect } from "react";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipes.json')
        .then(res=> res.json())
        .then(data=> setRecipes(data))
    },[])

    return (
        <div className="">
            <div className="md:w-2/3 grid grid-cols-2 my-14 gap-10">
                {
                    recipes.map(recipe=>
                        <Recipe 
                        key={recipes.recipe_id} 
                        recipe={recipe}
                        >
                        </Recipe>
                    )
                }
            </div>
            
        </div>
    );
};

export default Recipes;