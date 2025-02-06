
const Cooking = ({ cook }) => {

    const {recipe_name, preparing_time, calories} = cook;

    return (
        <div className="grid grid-cols-4 text-gray-500 py-2 items-center gap-4 bg-gray-50 px-7">
            <p>{recipe_name}</p>
            <p>{preparing_time}</p>
            <p>{calories}</p>
        </div>
    );
};

export default Cooking;