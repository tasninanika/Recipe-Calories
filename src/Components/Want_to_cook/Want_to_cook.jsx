
const Want_to_cook = ({wantToCook}) => {
    return (
        <div className="md:w-1/3 my-8">
            <div className="card rounded-xl border border-gray-300 bg-white text-primary-content w-full">
            <div className="card-body">
                <h2 className="card-title text-black flex justify-center pb-3 text-3xl border-b border-gray-200 mx-10 mb-4">Want to cook: {wantToCook.length}</h2>
                
                <div className="grid grid-cols-4 text-gray-500 font-semibold pb-3 border-b border-gray-200 ">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                
                {wantToCook.map((recipe, index) => (
                    <div key={index} className="grid grid-cols-4 text-gray-600 py-2 items-center gap-4 border-b border-gray-200">
                        <p className="flex gap-6">
                              {recipe.recipe_name}
                        </p>
                        <p>{recipe.preparing_time}</p>
                        <p>{recipe.calories}</p>
                        
                        <button className="btn rounded-full text-black bg-[#0BE58A] text-xs px-10 border-none">
                            Preparing
                        </button>
                    </div>
                ))}
            </div>

                </div>
        </div>
    );
};

export default Want_to_cook;