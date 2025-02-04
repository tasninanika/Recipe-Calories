
const Want_to_cook = ({wantToCook}) => {
    return (
        <div className="md:w-1/3 my-8">
            <div className="card rounded-xl border border-gray-300 bg-white text-primary-content w-full">
                <div className="card-body">
                    <h2 className="card-title text-black flex justify-center pb-3 text-3xl border-b border-gray-200">Want to cook: {wantToCook.length}</h2>
                    <div className="grid grid-cols-3">
                        <p className="text-gray-500 font-semibold">Name</p>
                        <p className="text-gray-500 font-semibold">Time</p>
                        <p className="text-gray-500 font-semibold">Calories</p>
                    </div>
                    <div className="">
                        {wantToCook.map((recipe,index) => (
                            <p className="text-gray-500 font-semibold" key={index}>{index+1}</p>
                        ))}
                        <p className="text-gray-500 font-semibold">Name</p>
                        <p className="text-gray-500 font-semibold">Time</p>
                        <p className="text-gray-500 font-semibold">Calories</p>
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Want_to_cook;