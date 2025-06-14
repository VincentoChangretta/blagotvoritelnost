import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Image } from 'shared/ui/Image/Image';
import { Subtitle } from 'shared/ui/Subtitle/Subtitle';
import { Title } from 'shared/ui/Title/Title';

export const OurMission = () => {
   return (
      <section className='relative z-10'>
         <div className='std-container'>
            <div className='relative z-10 text-mainBg'>
               <div className='flex items-start gap-[50px] justify-between mb-5 max-1100:flex-col max-1100:items-center max-1100:gap-8 max-1100:max-w-[500px] max-1100:mx-auto'>
                  <div className='relative max-w-2/4 backdrop-blur-2xl border-2 bg-mainGreen p-8 max-500:p-5 rounded-stdRadius overflow-hidden duration-150 hover:scale-[1.02] max-1100:max-w-full '>
                     <Title>Наша миссия</Title>
                     <ul className='flex flex-col gap-5 mb-5'>
                        <li>— Адресная помощь раненым бойцам и их семьям</li>
                        <li>— Обеспечение госпиталей медикаментами, техникой и средствами ухода</li>
                        <li>— Поддержка семей погибших: юридическая, психологическая, материальная</li>
                        <li>— Реабилитация и адаптация вернувшихся с фронта</li>
                        <li>— Гуманитарная помощь мирным жителям в зоне СВО</li>
                     </ul>
                     <Image
                        src='/zvezdaGreen.webp'
                        alt='звезда'
                        imgBoxClassName='absolute z-[-1] bottom-0 right-[-180px] opacity-35 max-w-[600px]'
                     />
                  </div>
                  <div className='relative max-w-2/4 backdrop-blur-2xl border-2 bg-mainGreen p-8 max-500:p-5 rounded-stdRadius overflow-hidden duration-150 hover:scale-[1.02] max-1100:max-w-full'>
                     <Title>Как помочь</Title>
                     <ul className='flex flex-col gap-5 mb-5'>
                        <li>— Адресная помощь раненым бойцам и их семьям</li>
                        <li>— Обеспечение госпиталей медикаментами, техникой и средствами ухода</li>
                        <li>— Поддержка семей погибших: юридическая, психологическая, материальная</li>
                        <li>— Реабилитация и адаптация вернувшихся с фронта</li>
                        <li>— Гуманитарная помощь мирным жителям в зоне СВО</li>
                     </ul>
                     <Image
                        src='/zvezdaGreen.webp'
                        alt='звезда'
                        imgBoxClassName='absolute z-[-1] bottom-0 right-[-180px] opacity-35 max-w-[600px]'
                     />
                  </div>
               </div>
               <div className='max-w-[800px] mx-auto flex flex-col items-center justify-center max-1100:max-w-[500px]'>
                  <Subtitle className='text-center text-mainGreen'>
                     Каждое ваше участие — это вклад в общее дело и знак благодарности тем, кто стоит на защите нашей
                     Родины.
                  </Subtitle>
                  <div className='flex gap-5 items-center justify-center w-full max-1100:flex-col max-1100:gap-3'>
                     <Button a={true} to='#podderjka' primary theme={ButtonThemes.STANDART}>
                        Поддержать
                     </Button>

                     <Button a={true} to='#celi' primary theme={ButtonThemes.STANDART}>
                        Целевые сборы
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
