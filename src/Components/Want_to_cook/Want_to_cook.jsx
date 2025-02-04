
const Want_to_cook = ({wantToCook}) => {
    return (
        <div className="md:w-1/3 my-8">
            <div className="card rounded-xl border border-gray-300 bg-white text-primary-content w-full">
                <div className="card-body">
                    <h2 className="card-title text-black text-center items-center mx-auto text-3xl">Want to cook: {wantToCook.length}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Want_to_cook;