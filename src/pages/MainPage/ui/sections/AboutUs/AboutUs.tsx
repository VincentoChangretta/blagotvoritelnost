import { Image } from 'shared/ui/Image/Image';
import { Title } from 'shared/ui/Title/Title';

export const AboutUs = () => {
   return (
      <section className='relative' id='fond'>
         <div className='std-container'>
            <div className='flex flex-col gap-7 z-10 max-1100:items-center'>
               <div className='relative overflow-hidden flex items-center justify-between gap-[50px] p-8 max-500:p-5 bg-mainGreen rounded-stdRadius text-mainBg max-1100:max-w-[500px] max-1100:flex-col max-1100:gap-5'>
                  <div className='relative z-10 max-w-[60%] max-1100:max-w-full'>
                     <Title>О Фонде</Title>
                     <div className='flex flex-col gap-5 text-2xl max-1100:text-xl max-1100:gap-7 max-500:text-lg'>
                        <p>
                           Благотворительный фонд поддержки участников СВО создан с целью оказания всесторонней помощи
                           военнослужащим, участвующим в Специальной военной операции, а также их семьям и гражданским
                           лицам, пострадавшим в зоне конфликта.
                        </p>
                        <p>
                           Мы уверены, что долг каждого из нас — поддержать тех, кто защищает безопасность и интересы
                           нашей страны. Каждый рубль, каждое тёплое слово, каждое дело имеет значение.
                        </p>
                     </div>
                  </div>
                  <Image
                     imgBoxClassName='max-w-[500px] relative z-20 max-500:max-w-[200px]'
                     imgClassName='rounded-stdRadius'
                     src='/holdDron.webp'
                     alt='Солдат'
                  />
                  <Image
                     imgBoxClassName='absolute bottom-0 left-[-300px] max-w-[900px] opacity-35'
                     src='/zvezdaGreen.webp'
                     alt='звезда'
                  />
               </div>
            </div>
         </div>
      </section>
   );
};
