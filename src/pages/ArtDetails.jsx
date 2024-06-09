import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";



const ArtDetails = () => {
    const craft = useLoaderData();
    const { subcategory_name, price, item_name, rating, processing_time, image, short_description } = craft || {};


    return (
        <div className="container px-8 py-10 mx-auto ">
            <div className="  flex-row lg:flex gap-9">
                <div className="lg:w-[50%]">
                    <img src={image} alt="" />

                </div>
                <div className="lg:w-[50%] space-y-4 mt-10">
                    <p className="text-center text-2xl font-bold ">{subcategory_name}</p>
                    <hr />


                    <p className=" font-semibold">Item Name:{item_name}</p>
                    <p className="font-semibold ">{short_description}</p>
                    <p className="font-semibold">Price:{price}</p>
                    <p className="font-semibold">processing:{processing_time}</p>
                    <p className="font-semibold flex items-center gap-5">rating:{rating}
                        <span className="text-yellow-200 flex"> <FaStar />
                            <FaStar /><FaStar /><FaStar /><FaStarHalf />
                        </span>
                      

                    </p>
                    <Link to='/' ><button className="border mt-5 rounded-full px-5 py-2"> <FaArrowLeftLong /></button></Link>





                </div>
            </div>


        </div>
    );
};

export default ArtDetails;