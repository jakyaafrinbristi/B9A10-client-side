import { Link, useLoaderData } from "react-router-dom";



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
              <th>Name</th>
              <th>SubCategory Name</th>
              <th>Item Name</th>
              <th>Processing</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              tablesItem.map((table,index) => <tr key={table._id}>
                <th>{index+1}</th>
                <td>{table.name}</td>
                <td>{table.
                  subcategory_Name}</td>
                <td>{table.item_name}</td>
                <td>{table.processing}</td>
                <th>
                <Link to={`/card/${table._id}`} >
                   <button className="btn btn-ghost btn-xs">View details</button>
                   </Link>
               
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