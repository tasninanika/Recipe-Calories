import PropTypes from 'prop-types';
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import { useEffect } from "react";

const Recipes = ({handleWantToCook, wantToCook}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipes.json')
        .then(res=> res.json())
        .then(data=> setRecipes(data))
    },[])

    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-2 gap-5 my-8">
                {
                    recipes.map(recipe=>
                        <Recipe 
                        key={recipes.recipe_id} 
                        recipe={recipe}
                        handleWantToCook = {handleWantToCook}
                        wantToCook={wantToCook}
                        >
                        </Recipe>
                    )
                }
            </div>
            
        </div>
    );
};

Recipes.propTypes = {
    handleWantToCook:PropTypes.func,
    wantToCook: PropTypes.array.isRequired
    
}

export default Recipes;