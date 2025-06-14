import { Title } from 'shared/ui/Title/Title';
import { VolunteerForm } from './ui/VolunteerForm/VolunteerForm';

export const Volunteer = () => {
   return (
      <section id='volonter'>
         <div className='std-container'>
            <div className='flex gap-[50px] items-center max-1100:flex-col max-1100:max-w-[500px] max-1100:mx-auto max-1100:text-center max-1100:gap-8 '>
               <div className='flex flex-col gap-3 max-w-2/4 max-1100:max-w-full'>
                  <Title className='text-left max-1100:text-center max-1100:mb-5'>Волонтерская деятельность</Title>
                  <p>
                     Наша команда волонтёров оказывает гуманитарную помощь мирным жителям и военнослужащим в зоне СВО —
                     мы собираем, сортируем, доставляем и передаём всё необходимое. Каждый, кто готов помочь, может
                     стать частью этой важной миссии.
                  </p>
                  <p>
                     Если вы хотите присоединиться к нашей волонтёрской команде — заполните форму или позвоните по
                     номеру — +7 (999) 999 99 99.
                  </p>
                  <p className='font-bold'>Вместе мы можем больше!</p>
               </div>
               <VolunteerForm />
            </div>
         </div>
      </section>
   );
};
