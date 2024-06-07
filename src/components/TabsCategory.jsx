import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ArtCard from './ArtCard';
import { useEffect, useState } from 'react';

const TabsCategory = () => {
    const [crafts, setCrafts] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/crafts`)
            .then(res => res.json())
            .then(data => {
                setCrafts(data)
            })
    }, [])
    return (
        <Tabs>
            <div className='container px-8  mx-auto'>
                <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl'>Painting and Drawing section </h1>
                <p className='max-w-2xl mx-auto my-6 text-center text-gray-500'>
                    Discover the vibrant world of painting and drawing, where colors and brush strokes merge with sketching and shading to create expressive, captivating artworks. This versatile medium allows you to convey emotions and stories, bringing imagination to life on canvas and paper.</p>
                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>Landscape Painting</Tab>
                        <Tab>Portrait Drawing</Tab>
                        <Tab>Watercolor Painting</Tab>
                        <Tab>Oil Painting</Tab>
                        <Tab>Charcoal Sketching</Tab>
                        <Tab> Cartoon Drawing</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8'>
                        {crafts.filter(c => c.subcategory_name === "Landscape Painting").map(craft => <ArtCard
                            key={craft._id}
                            craft={craft}
                        ></ArtCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8'>
                        {crafts.filter(c => c.subcategory_name === "Portrait Drawing").map(craft => <ArtCard
                            key={craft._id}
                            craft={craft}
                        ></ArtCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8'>
                        {crafts.filter(c => c.subcategory_name === "Watercolor Painting").map(craft => <ArtCard
                            key={craft._id}
                            craft={craft}
                        ></ArtCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8'>
                        {crafts.filter(c => c.subcategory_name === "Oil Painting").map(craft => <ArtCard
                            key={craft._id}
                            craft={craft}
                        ></ArtCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8'>
                        {crafts.filter(c => c.subcategory_name === "Charcoal Sketching").map(craft => <ArtCard
                            key={craft._id}
                            craft={craft}
                        ></ArtCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8'>
                        {crafts.filter(c => c.subcategory_name === "Cartoon Drawing").map(craft => <ArtCard
                            key={craft._id}
                            craft={craft}
                        ></ArtCard>)}
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );

};

export default TabsCategory;