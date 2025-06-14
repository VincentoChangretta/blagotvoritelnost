import { RutubeIframe } from 'shared/ui/RutubeIframe/RutubeIframe';
import { Title } from 'shared/ui/Title/Title';

export const VideoReports = () => {
   return (
      <section>
         <div className='std-container'>
            <Title>Видеоотчеты</Title>
            <div className='flex items-center gap-[50px] max-1100:flex-col max-1100:max-w-[500px] max-1100:mx-auto'>
               <RutubeIframe
                  className='max-w-2/4 w-full rounded-stdRadius max-1100:max-w-full'
                  link='https://rutube.ru/play/embed/a3d134a7b8e31c0555b21767e2f4ec03/'
               />
               <RutubeIframe
                  className='max-w-2/4 w-full rounded-stdRadius max-1100:max-w-full'
                  link='https://rutube.ru/play/embed/a3d134a7b8e31c0555b21767e2f4ec03/'
               />
            </div>
         </div>
      </section>
   );
};
