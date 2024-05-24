import React from 'react';
import { Link } from 'react-router-dom';

const CraftCard = ({card}) => {
  const {_id,name,email,item_name,subcategory_Name,price,rating,processing,image,description,customization,stock}= card;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl w-[90%] h-[70%] 	 ">
  <figure><img className='h-full w-full m-2 mb-5' src={image} alt="Shoes"  /></figure>
  <div className="card-body space-y-2">
    <h2 className="card-title">{item_name}</h2>
    <p className='text-xl'>{description}</p>
   <div className='flex items-center'>
   <p className='text-xl'>Price:{price}</p>
    
    <p  className='text-xl'>{rating}</p>
   </div>
    <Link to={`/card/${_id}`} >
      <button className="btn btn-primary w-full">View Details</button>
    </Link>
  </div>
</div>
            
        </div>
    );
};

export default CraftCard;