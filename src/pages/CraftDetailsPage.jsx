import { useLoaderData } from "react-router-dom";


const CraftDetailsPage = () => {
    const card =useLoaderData();
    // console.log(card)
    const {_id,name,email,item_name,subcategory_Name,price,rating,processing,image,description,customization,stock}= card || {};
    return (
        <div className="container px-8 py-10 mx-auto ">
       <div className="  flex-row lg:flex gap-9">
       <div className="lg:w-[50%]">
        <img  src={image} alt="" />
        </div>
        <div className="lg:w-[50%] space-y-4 mt-20">
            <p className="text-center text-2xl font-bold ">{subcategory_Name}</p>
            <hr />
            <p className="text-center text-2xl font-bold ">{item_name}</p>
            <p className="text-center text-xl font-semibold">{description}</p>
            <p>Price:{price}</p>
            <p>processing:{customization}</p>
            <p>Stock:{stock}</p>
            
       

    
            
        </div>
       </div>

            
        </div>
    );
};

export default CraftDetailsPage;