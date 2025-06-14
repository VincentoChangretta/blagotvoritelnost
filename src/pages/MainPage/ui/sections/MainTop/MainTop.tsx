import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Image } from 'shared/ui/Image/Image';
import { Subtitle } from 'shared/ui/Subtitle/Subtitle';
import { Title } from 'shared/ui/Title/Title';

export const MainTop = () => {
   return (
      <section>
         <div className='std-container '>
            <div className='relative z-10 flex justify-between items-center gap-[50px] max-1100:flex-col-reverse max-1100:gap-2.5'>
               <Image
                  src='/main.webp'
                  alt='Главная фотография'
                  imgBoxClassName='max-w-[600px] shrink-0 max-1300:shrink-1 max-1100:max-w-[500px]'
                  imgClassName='rounded-stdRadius'
               />
               <div className='max-w-[800px] max-1300:max-w-[600px] max-1100:max-w-[500px] max-1100:flex max-1100:flex-col max-1100:items-center max-1100:text-center'>
                  <Title className='text-left !mb-5 max-1100:text-center '>
                     Благотворительный сбор средств для помощи Российским военным
                  </Title>
                  <div className='mb-12 max-1100:mb-6'>
                     <Subtitle className='max-1100:mb-0'>
                        Материальная и социальная поддержка участникам СВО и их семьям, а также жителям новых регионов
                        России
                     </Subtitle>
                  </div>
                  <div className='flex gap-5 w-full max-1300:flex-col max-1100:items-center max-1300:gap-3'>
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
         <Image
            src='/zvezda.webp'
            alt='звезда'
            imgBoxClassName='max-500:hidden absolute z-0 top-[150px] right-[110px] max-w-[1000px] w-full opacity-25 pointer-events-none max-1300:right-[-330px]'
         />
      </section>
   );
};
