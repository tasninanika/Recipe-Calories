import PropTypes from 'prop-types';
import { IoTimerOutline } from "react-icons/io5";
import { TbFlame } from "react-icons/tb";



const Recipe = ({recipe}) => {
    console.log(recipe);

    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;

    return (
        <div className="grid grid-cols-2 gap-6">
            <div className="w-96 flex flex-col h-full rounded-xl border border-gray-300 bg-white">

                <figure className="px-6 pt-6">
                    <img src={recipe_image} alt="food" className="rounded-2xl w-full" />
                </figure>

                <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl font-semibold">{recipe_name}</h2>
                    <p className="text-gray-600 border-b border-gray-200 pb-4">{short_description}</p>

                    <h4 className="font-semibold mt-4">Ingredients: {ingredients.length}</h4>
                    <ul className="list-disc pl-5 text-gray-600 border-b border-gray-200 pb-4 mb-4">
                        {ingredients.map((ingredient, index) => (
                            <li className="mb-1" key={index}>{ingredient}</li>
                        ))}
                    </ul>

                    <div className="flex items-center text-gray-600 gap-4 mb-6">
                        <p className="flex items-center gap-1">
                            <IoTimerOutline size={20} /> {preparing_time}
                        </p>
                        <p className="flex items-center gap-1">
                            <TbFlame size={20} /> {calories}
                        </p>
                    </div>

                    <div className="mt-auto">
                        <button className="btn rounded-full text-black bg-[#0BE58A] border-none px-[20px] text-lg py-[15px]">
                            Want to cook
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
    
}

export default Recipe;