
const Cooking = ({ cook }) => {

    const {recipe_name, preparing_time, calories} = cook;

    return (
        <div className="grid grid-cols-3 text-gray-500 py-2 items-center bg-gray-50">
            <p>{recipe_name}</p>
            <p>{preparing_time}</p>
            <p>{calories}</p>
        </div>
    );
};

export default Cooking;