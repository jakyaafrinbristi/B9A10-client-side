import React from 'react';
import { Link } from 'react-router-dom';

const CraftCard = ({ card }) => {
  const { _id, name, email, item_name, subcategory_Name, price, rating, processing, image, description, customization, stock } = card;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl w-[90%] h-[70%] 	 ">
        <figure><img className='h-full w-full m-2 mb-5' src={image} alt="Shoes" /></figure>
        <div className="card-body space-y-2">
          <h2 className="card-title">{item_name}</h2>
          <p className='text-xl'>{description}</p>
          <div className='flex items-center'>
            <p className='text-xl'>Price:{price}</p>

            <p className='text-xl'>{rating}</p>
          </div>
          
          
            
           <Link to={`/card/${_id}`} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
           <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
           </span>
           <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">View details</span>
           <span className="relative invisible">View Details</span>
           
            </Link>
          
        </div>
      </div>

    </div>
  );
};

export default CraftCard;