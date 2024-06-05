import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyArtDetailsPage from "../components/MyArtDetailsPage";


const MyArtAndCraft = () => {
    const { user } = useContext(AuthContext)
    const [items,setItems ] = useState([])
    useEffect(() => {
        fetch(`http://localhost:9000/cards/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [user])
    return (
        <div className="container mx-auto px-6 py-10">
           
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
                items.map(item => <MyArtDetailsPage
                    key={item._id}
                    item={item}
                    items={items}
                    setItems={setItems}
                ></MyArtDetailsPage>)

            }
        </div>

        </div>
    );
};

export default MyArtAndCraft;