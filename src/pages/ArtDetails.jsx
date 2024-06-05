import { useLoaderData } from "react-router-dom";


const ArtDetails = () => {
    const craft=useLoaderData();
    const {subcategory_name,price,item_name,rating,processing_time,image,short_description}= craft || {};

    return (
        <div className="container px-8 py-10 mx-auto ">
        <div className="  flex-row lg:flex gap-9">
        <div className="lg:w-[50%]">
         <img  src={image} alt="" />
         </div>
         <div className="lg:w-[50%] space-y-4 mt-10">
             <p className="text-center text-2xl font-bold ">{subcategory_name}</p>
             <hr />

          
             <p className=" font-semibold">Item Name:{item_name}</p>
             <p className="font-semibold ">{short_description}</p>
             <p className="font-semibold">Price:{price}</p>
             <p className="font-semibold">processing:{processing_time}</p>
             <p className="font-semibold">rating:{rating}</p>
             
        
 
     
             
         </div>
        </div>
 
             
         </div>
    );
};

export default ArtDetails;