import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const CraftCard = ({ card }) => {
  const { _id,item_name, subcategory_Name, price, rating, processing, image, description } = card;
  return (
    <div>
      <div className="card w-full h-[80%] bg-base-100 shadow-xl space-y-5 mb-10">
        <figure><img src={image} alt="Shoes" className="w-full h-full p-10 " /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {item_name}
            <div className="badge badge-ghost  py-5 text-center">{subcategory_Name}</div>
          </h2>
          <p className="font-semibold">{description}</p>
          <div className="flex justify-between">
            <p className="font-semibold">Price:{price}</p>
            <p className="font-semibold">Processing time:{processing}</p>
          </div>

          <p className="font-semibold flex gap-5 items-center">rating:{rating}
            <span className="text-yellow-200 flex"> <FaStar />
              <FaStar /><FaStar /><FaStar /><FaStarHalf />
            </span>
          

          </p>
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

