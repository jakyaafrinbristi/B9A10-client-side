
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import bgImg1 from '../assets/images/carousel-1.jpg'
import bgImg2 from '../assets/images/carousel-2.jpg'
import bgImg3 from '../assets/images/carousel-3.jpg'
import { Fade } from "react-awesome-reveal";


export default function Carousel() {
  return (
    <div className='container px-8 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
           <Slide image={bgImg1} 
           text='Unleash Your Creative Potential with Art from Around the Globe'/>
              </SwiperSlide>
        <SwiperSlide>
           <Slide image={bgImg2} text='Unleash Your Creative Potential with Art from Around the Globe'/>
              </SwiperSlide>
        <SwiperSlide>
           <Slide image={bgImg3} text='Unleash Your Creative Potential with Art from Around the Globe'/>
              </SwiperSlide>

     
      </Swiper>
    </div>
  );
}
