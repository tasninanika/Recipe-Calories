import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    console.log(recipe);
    return (
        <div className=''>
            <div className="card w-96 rounded-lg border-gray-300 border-1">
                <figure className="px-10 pt-10">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
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