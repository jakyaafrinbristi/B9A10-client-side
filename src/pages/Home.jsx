import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import CraftCard from "../components/CraftCard";
import TabsCategory from "../components/TabsCategory";


const Home = () => {
    const cardsItem = useLoaderData();
    const crafts = useLoaderData();
    console.log(crafts)
    console.log(cardsItem)
    return (
        <div>
            <Carousel></Carousel>

            <div className="container px-8 py-10 mx-auto">
                <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl'>Craft Items section </h1>
                <p className='max-w-2xl mx-auto my-6 text-center text-gray-500'>

                    Craft items offer an intimate glimpse into the artist's world, encapsulating emotions and narratives within strokes and lines. Each piece, whether a vibrant painting or a delicate sketch, serves as a testament to the creator's creativity and skill, inviting viewers to immerse themselves in the artist's vision.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        cardsItem.slice(0, 6).map(card => <CraftCard
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