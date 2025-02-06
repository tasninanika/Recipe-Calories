import PropTypes from 'prop-types';

const Cooking = ({ cook, index }) => {

    const {recipe_name, preparing_time, calories} = cook;


    return (
        <div>
            <div className="grid grid-cols-4 text-gray-500 bg-gray-50 font-fira py-2 items-center px-6">
            <p className="">{index+1}</p>
            <p className="text-left">{recipe_name}</p>  
            <p className="text-center">{preparing_time}</p>  
            <p className="text-center">{calories}</p>  
            </div>
        </div>

    );
};

Cooking.propTypes = {
    cook: PropTypes.object.isRequired,
    index: PropTypes.array.isRequired
    
}

export default Cooking;