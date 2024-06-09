import Lottie from "lottie-react";
import Swal from 'sweetalert2'
import form from "../json/form.json";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const AddCraftItem = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const craftHandler = e=>{
        e.preventDefault();
        const form =e.target;
        // const name =form.name.value;
        const name =user.displayName;
        // const email=form.email.value;
        const email=user.email;
        const item_name=form.item_name.value;
        const subcategory_Name=form.subcategory_Name.value;
        const price =form.price.value;
        const  rating =form.rating.value;
        const processing =form.processing.value;
        const image =form.image.value;
        const description =form.description.value;
        const customization = form.customization.value;
        const stock = form.stock.value;
        const addCraftItem ={name,email,item_name,subcategory_Name,price,rating,processing,image,description,customization,stock}
        console.log(addCraftItem)
        form.reset();

        // send data to the server
        fetch(`${import.meta.env.VITE_API_URL}/cards`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addCraftItem)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft Item Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })

            }
        })



    }
    return (

        <div className="  container px-8 py-10 mx-auto">
            <h2 className="text-center text-2xl font-bold mb-10 underline">Add craft item</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div>
                    <Lottie animationData={form} loop={true} />
                </div>
                <div className="bg-slate-100 px-5 py-5">
                    {/* first row */}
                    <form onSubmit={craftHandler}>
                        <div className="md:flex">
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Name
                                    </span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="name" id="" className="input input-bordered w-full" placeholder="Name" />
                                </label>

                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Email
                                    </span>
                                </label>
                                <label className="input-group">

                                    <input type="email" name="email" id="" className="input input-bordered w-full" placeholder="email" />
                                </label>

                            </div>
                        </div>
                        {/* second row */}
                        <div className="md:flex">
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Item
                                    </span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="item_name" id="" className="input input-bordered w-full" placeholder="item_name" />
                                </label>

                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Subcategory Name
                                    </span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="subcategory_Name" id="" className="input input-bordered w-full" placeholder="subcategory_Name" />
                                </label>

                            </div>
                        </div>
                        {/* third row  */}
                        <div className="md:flex">
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Price
                                    </span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="price" id="" className="input input-bordered w-full" placeholder="price" />
                                </label>

                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Rating
                                    </span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="rating" id="" className="input input-bordered w-full" placeholder="rating" />
                                </label>

                            </div>
                        </div>
                        {/* fourth row */}
                        <div className="md:flex">
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Processing time
                                    </span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="processing" id="" className="input input-bordered w-full" placeholder="processing_time" />
                                </label>

                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Image
                                    </span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="image" id="" className="input input-bordered w-full" placeholder="image_url" />
                                </label>

                            </div>
                        </div>
                        <div className="md:flex">
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Customization
                                    </span>
                                </label>
                                <label className="input-group">

                                    <select 
                                    name='customization'
                                    className="select select-bordered w-full ">

                                        <option>YES </option>
                                        <option>No</option>

                                    </select>
                                </label>

                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">StockStatus
                                    </span>
                                </label>
                                <label className="input-group">

                                    <select 
                                    name='stock'
                                    className="select select-bordered w-full ">

                                        <option>Made to Order </option>
                                        <option>In Stock</option>

                                    </select>
                                </label>

                            </div>

                        </div>




                        <div className='flex flex-col gap-2 mt-4'>
                            <label className='text-gray-700 ' htmlFor='description'>
                                Description
                            </label>
                            <textarea
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                name='description'
                                id='description'
                            ></textarea>
                        </div>
                        <input type="submit" value="Add" className="btn btn-block mt-5 bg-white" />


                    </form>
                </div>
            </div>


        </div>

    );
};

export default AddCraftItem;