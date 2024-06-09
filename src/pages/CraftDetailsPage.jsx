import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";


const CraftDetailsPage = () => {
    const card =useLoaderData();
    // console.log(card)
    const {item_name,subcategory_Name,price,rating,processing,image,description,customization,stock}= card || {};
    return (
        <div className="container px-8 py-10 mx-auto ">
       <div className="  flex-row lg:flex gap-9">
       <div className="lg:w-[50%]">
        <img className="w-full h-full" src={image} alt="" />
    <Link to = '/' ><button className="border mt-5 rounded-full px-5 py-2"> <FaArrowLeftLong /></button></Link>
        </div>
        <div className="lg:w-[50%] space-y-4 flex flex-col justify-center">
            <p className="text-center text-2xl font-bold ">{subcategory_Name}</p>
            <hr />
            <p className="font-semibold ">Item Name:{item_name}</p>
            <p className=" font-semibold">{description}</p>
            <p className="font-semibold">Price:{price}</p>
            <p className="font-semibold">processing_time:{processing}</p>
            <p className="font-semibold">Customization:{customization}</p>
            <p className="font-semibold">Stock:{stock}</p>
            <p className="font-semibold flex gap-5 items-center">rating:{rating}
            <span className="text-yellow-200 flex"> <FaStar />
            <FaStar /><FaStar /><FaStar /><FaStarHalf />
</span>

             </p>
            
       

    
            
        </div>
       </div>

            
        </div>
    );
};

export default CraftDetailsPage;