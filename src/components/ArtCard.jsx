import { Link } from "react-router-dom";

const ArtCard = ({ craft }) => {
    const {_id, subcategory_name, image, item_name, short_description, price, rating, processing_time } = craft || {}
    return (
        <div>
            <div className="card w-full h-[80%] bg-base-100 shadow-xl space-y-5">
                <figure><img src={image} alt="Shoes" className="w-full p-10 " /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item_name}
                        <div className="badge badge-accent py-5 text-center">{subcategory_name}</div>
                    </h2>
                    <p className="font-semibold">{short_description}</p>
                    <div className="flex justify-between">
                        <p className="font-semibold">Price:{price}</p>
                        <p className="font-semibold">Processing time:{processing_time}</p>
                    </div>

                    <p className="font-semibold">Rating:{rating}</p>
                    <div>      <Link to={`/craft/${_id}`} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">View details</span>
                    </Link></div>

                </div>
            </div>

        </div>
    );
};

export default ArtCard;