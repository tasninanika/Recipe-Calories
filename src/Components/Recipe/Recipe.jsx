import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    console.log(recipe);

    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;

    return (
        <div className=''>
            <div className="card w-96 rounded-xl border-gray-300 border-1">
                <figure className="px-6 pt-6">
                    <img
                    src={recipe_image}
                    alt="food"
                    className="rounded-2xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='border-b border-gray-200'>{short_description}</p>
                    <h4>Ingredients: {ingredients.length}</h4>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
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