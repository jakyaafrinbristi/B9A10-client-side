import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyArtDetailsPage = ({ item ,items,setItems}) => {
    const {_id, image,item_name,price,rating,customization,stock } = item || {}
    const handleDelete =_id =>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:9000/card/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                      Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = items.filter(itm => itm._id !== _id);
              setItems(remaining)

                }
            })
            
            }
          });
    }
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
                    <Link to={`/update/${_id}`}>
                    <button className="btn btn-accent">Update</button>
                    </Link>
                  
                        <button onClick={()=>handleDelete(_id)} className="btn bg-red-400">Delete</button>
                    </div>
                   
                </div>
               
            </div>

        </div>
    );
};

export default MyArtDetailsPage;