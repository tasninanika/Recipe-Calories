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
        <div className="mx-10 my-24">
            <h2 className="text-4xl font-semibold text-center mb-5">Our Recipes</h2>
            <p className="text-lg text-center mx-auto w-[823px] h-[52px] text-[#150B2BB2] mb-5">Explore a curated collection of delicious and easy-to-follow recipes that cater to all tastes and dietary preferences. Whether you’re craving comfort food or something new, we’ve got you covered!</p>
            <div className="md:w-2/3 grid grid-cols-2 mt-14 gap-10">
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