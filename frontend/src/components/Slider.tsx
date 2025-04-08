// Slider.tsx
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import hack1 from '../assets/hack1.jpg';
import hack2 from '../assets/hack2.jpg';
import hack3 from '../assets/hack3.jpg';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  subtitle1: string;
  subtitle2: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'WELCOME TO',
    subtitle: 'HOUSE OF PRAYER',
    subtitle1: 'Where Faith, Community, and Love Meet.',
    subtitle2: '    Join us this beautiful journey of spiritual growth.',
    image: hack1,
  },
  {
    id: 2,
    title: 'WELCOME TO',
    subtitle: 'HOUSE OF PRAYER',
    subtitle1: 'Where Faith, Community, and Love Meet.',
    subtitle2: '    Join us this beautiful journey of spiritual growth.',
    image: hack2,
  },
  {
    id: 3,
    title: 'WELCOME TO',
    subtitle: 'HOUSE OF PRAYER',
    subtitle1: 'Where Faith, Community, and Love Meet.',
    subtitle2: '    Join us this beautiful journey of spiritual growth.',
    image: hack3,
  },
];

const Slider: FC = () => {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-red-400 bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-6">
              <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
              <h1 className="text-4xl md:text-6xl font-bold mt-2">
                {slide.subtitle}
              </h1>
              <p className=" md:text-2xl mt-4">{slide.subtitle1}</p>
              <p className=" md:text-2xl ">{slide.subtitle2}</p>
              <div className="flex flex-row md:flex-row gap-2 mt-6">
                {' '}
                <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                  Join Live
                </button>{' '}
                <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                  Get Involved
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
