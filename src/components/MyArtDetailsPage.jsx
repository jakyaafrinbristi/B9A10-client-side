

const MyArtDetailsPage = ({ item }) => {
    const { image,item_name,price,rating,customization,stock } = item || {}
    return (
        <div>
            <div className="card card-side bg-cyan-50 shadow-xl h-full w-full ">
                <figure><img className="w-full h-[60%] px-5 " src={image} alt="Movie" /></figure>
                <div className="card-body w-[50%]">
                    <h2 className="card-title">{item_name}</h2>
                    <p className="font-semibold">Price:{price}</p>
                    <p  className="font-semibold">Rating:{rating}</p>
                    <p  className="font-semibold">Stock:{stock}</p>
                    <p  className="font-semibold">Customization:{customization}</p>
                    <div className="flex flex-row gap-5">
                        <button className="btn btn-accent">Update</button>
                        <button className="btn btn-accent">Delete</button>
                    </div>
                   
                </div>
               
            </div>

        </div>
    );
};

export default MyArtDetailsPage;