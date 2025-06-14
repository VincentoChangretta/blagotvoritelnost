import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Image } from 'shared/ui/Image/Image';
import { Title } from 'shared/ui/Title/Title';
import { Subtitle } from 'shared/ui/Subtitle/Subtitle';
import { SLIDER_BG_IMG } from 'shared/types/types';

const imgArray = [SLIDER_BG_IMG, SLIDER_BG_IMG, SLIDER_BG_IMG, SLIDER_BG_IMG];

export const Reports = () => {
   return (
      <section>
         <div className='std-container'>
            <div className='max-1100:max-w-[500px] max-1100:mx-auto'>
               <Title>Отчеты</Title>
               <Subtitle className='text-center mb-[50px]'>
                  Здесь мы делимся тёплыми моментами с наших благотворительных поездок и мероприятий в зоне СВО. В
                  каждом кадре — искренние эмоции, поддержка и помощь тем, кто в ней особенно нуждается. Листайте
                  слайдер, чтобы увидеть, как вместе мы делаем доброе дело.
               </Subtitle>
               <div>
                  <Swiper
                     className='rounded-stdRadius overflow-hidden max-1100:h-[400px]'
                     modules={[Navigation, Pagination]}
                     spaceBetween={30}
                     slidesPerView={1}
                     navigation
                     pagination={{ clickable: true }}
                     loop={true}
                  >
                     {imgArray.map((slide, index) => (
                        <SwiperSlide key={index}>
                           <Image
                              src={slide}
                              imgBoxClassName='h-[800px] max-1100:h-[400px]'
                              imgClassName=''
                              alt='фото'
                           />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
      </section>
   );
};
