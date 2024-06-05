import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import CraftCard from "../components/CraftCard";
import TabsCategory from "../components/TabsCategory";


const Home = () => {
    const cardsItem=useLoaderData();
    const crafts=useLoaderData();
    console.log(crafts)
    console.log(cardsItem)
    return (
        <div>
            <Carousel></Carousel>
        
         <div className="container px-8 py-10 mx-auto">
         <h1 className="text-center text-3xl font-semibold underline">card Item</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         {
           cardsItem.slice(0,6).map(card =><CraftCard 
           key={card._id}
           card={card}
           ></CraftCard>) 
         }
         </div>
       
         </div>
         <TabsCategory crafts={crafts}></TabsCategory>
        </div>
    );
};

export default Home;