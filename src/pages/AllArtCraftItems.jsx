import { Link, useLoaderData } from "react-router-dom";
import { Tooltip } from 'react-tooltip'



const AllArtCraftItems = () => {
  const tablesItem = useLoaderData();

  return (
    <div className="container px-8 py-10 mx-auto">
 

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-bold text-red-900 ">Name</th>
              <th  className="font-bold text-red-900 ">SubCategory Name</th>
              <th  className="font-bold text-red-900 ">Item Name</th>
              <th  className="font-bold text-red-900 ">Processing</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              tablesItem.map((table,index) => <tr key={table._id}>
                <th >{index+1}</th>
                <td className="text-rose-500">{table.name}</td>
                <td className="text-blue-600">{table.
                  subcategory_Name}</td>
                <td className="text-red-500">{table.item_name}</td>
                <td className="text-green-600">{table.processing}</td>
                <th>
                <Link to={`/card/${table._id}`} >
                   <button className="btn btn-xs bg-purple-100 text-purple-800 hover:bg-purple-50" id="button">View details</button>
                   </Link>
        <Tooltip anchorSelect="#button">
          <p >click me</p>
          </Tooltip>

               
                </th>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtCraftItems;