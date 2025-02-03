import PropTypes from 'prop-types';
import { IoTimerOutline } from "react-icons/io5";
import { TbFlame } from "react-icons/tb";



const Recipe = ({recipe}) => {
    console.log(recipe);

    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;

    return (
        <div className=''>
            <div className="card w-96 h-[685px] rounded-xl border-gray-300 border-1">
                <figure className="px-6 pt-6">
                    <img
                    src={recipe_image}
                    alt="food"
                    className="rounded-2xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='border-b border-gray-200 pb-4'>{short_description}</p>
                    <h4 className=''>Ingredients: {ingredients.length}</h4>
                    <ul className="list-disc pl-5 text-gray-600 border-gray-200 border-b mb-2">
                        {ingredients.map((ingredient, index) => (
                            <li className='mb-2' key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <div className="flex items-center text-gray-600 mb-4">
                        <p className="flex items-center gap-1">
                            <IoTimerOutline size={20} /> {preparing_time}
                        </p>
                        <p className="flex items-center gap-1 -ml-30">
                            <TbFlame size={20} /> {calories}
                        </p>
                    </div>
                    <div className="card-actions">
                    <button className="btn rounded-full text-black bg-[#0BE58A] border-none px-[20px] text-lg py-[15px]">Want to cook</button>
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