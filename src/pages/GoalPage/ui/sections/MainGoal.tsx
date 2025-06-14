import { getCurrentGoal } from 'entities/CurrentGoal';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routesConfig/routeConfig';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Image } from 'shared/ui/Image/Image';
import { Subtitle } from 'shared/ui/Subtitle/Subtitle';
import { Text } from 'shared/ui/Text/Text';
import { Title } from 'shared/ui/Title/Title';

export const MainGoal = () => {
   const activeGoal = useSelector(getCurrentGoal);
   const navigate = useNavigate();

   useEffect(() => {
      if (!activeGoal) {
         navigate(RoutePath.main);
      }
   }, [activeGoal]);

   if (!activeGoal) {
      return null;
   }

   return (
      <section>
         <div className='std-container'>
            <div className='flex items-start gap-[50px] max-1100:max-w-[500px] max-1100:flex-col max-1100:mx-auto max-500:gap-8'>
               <Image
                  imgBoxClassName='relative z-10 max-w-[500px] max-500:max-w-[300px]'
                  imgClassName='rounded-stdRadius'
                  src={activeGoal.img}
                  alt={activeGoal.name}
               />
               <div className='flex flex-col gap-8'>
                  <div>
                     <Title className='text-left'>{activeGoal.name}</Title>
                     <div className='flex flex-col gap-2'>
                        {activeGoal.goals.map((item, index) => (
                           <Text key={index}>— {item}</Text>
                        ))}
                     </div>
                  </div>
                  <div className='w-full flex flex-col '>
                     <div className='mb-10'>
                        <Subtitle className='!mb-2'>Осталось: {activeGoal.remains}</Subtitle>
                        <Text>Нужно собрать: {activeGoal.allPrice}</Text>
                     </div>
                     <Button primary a={true} theme={ButtonThemes.STANDART}>
                        Поддержать
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
