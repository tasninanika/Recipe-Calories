
const Want_to_cook = ({wantToCook}) => {
    return (
        <div className="md:1/3 grid grid-cols-1 bg-red-400">
            <div className="card bg-primary text-primary-content w-full">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
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