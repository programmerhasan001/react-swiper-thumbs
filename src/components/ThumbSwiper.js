import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='mx-auto w-2/4 h-52'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 h-52"
            >
                <SwiperSlide className='bg-red-700 h-52'>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-red-400 h-52'>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-purple-800 h-52'>Slide 3</SwiperSlide>
                <SwiperSlide className='bg-slate-700 h-52'>Slide 4</SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-red-700 h-24'>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-red-400 h-24'>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-purple-800 h-24'>Slide 3</SwiperSlide>
                <SwiperSlide className='bg-slate-700 h-24'>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
};