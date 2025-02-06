import PropTypes from 'prop-types';
import { useState } from 'react';
import Cooking from '../Cooking/Cooking';

const Want_to_cook = ({wantToCook}) => {

    const [cooking, setCooking] = useState([]);

    const handleCurrentlyCooking = cook =>{
        const newCurrentkyCooking = [...cooking, cook];
        setCooking(newCurrentkyCooking);
    }

    return (
        <div className="md:w-1/3 my-8">
            <div className="card rounded-xl border border-gray-300 bg-white text-primary-content w-full">
            <div className="card-body">
                <h2 className="card-title text-black flex justify-center pb-3 mb-4 text-3xl border-b border-gray-200 mx-10">Want to cook: {wantToCook.length}</h2>
                
                <div className="grid grid-cols-4 text-gray-500 font-semibold font-fira -mb-4">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                </div>
                <div className="mb-2">
                {wantToCook.map((recipe, index) => (
                    <div key={index} className="grid grid-cols-4 text-gray-500 py-2 items-center gap-4 bg-gray-50 px-7">
                        <p>{recipe.recipe_name}</p>
                        <p>{recipe.preparing_time}</p>
                        <p>{recipe.calories}</p>
                        
                        <button className="btn rounded-4xl text-black bg-[#0BE58A] text-xs border-none py-[2px] px-[18px]" onClick={()=>handleCurrentlyCooking(recipe)}> 
                            
                            Preparing
                        </button>
                    </div>
                ))}

                {/* cooking */}
                <h2 className="card-title text-black flex justify-center pb-3 text-3xl border-b border-gray-200 mx-10 mt-8 mb-4">Currently cooking: {cooking.length}</h2>
                
                <div className="grid grid-cols-4 text-gray-500 font-semibold font-fira py-2 items-center px-7">
                    <p className='w-1'></p>
                    <p className="text-left">Name</p>  
                    <p className="text-center">Time</p>  
                    <p className="text-center">Calories</p>  
                </div>

                </div>
                <div className="mb-2">
                
                {
                cooking.map((cook,idx) => <Cooking key={idx} cook={cook} index={idx}></Cooking>)
            }

                </div>
                
            </div>

        </div>
    );
};

Want_to_cook.propTypes = {
    wantToCook: PropTypes.array.isRequired
    
}

export default Want_to_cook;