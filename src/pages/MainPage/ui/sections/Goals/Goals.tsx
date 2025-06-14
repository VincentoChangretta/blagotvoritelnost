import { Title } from 'shared/ui/Title/Title';
import { Image } from 'shared/ui/Image/Image';
import { Subtitle } from 'shared/ui/Subtitle/Subtitle';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { AppRoutes } from 'shared/config/routesConfig/routeConfig';
import { currentGoalActions, goalsData, GoalsDataType } from 'entities/CurrentGoal';
import { useDispatch } from 'react-redux';

export const Goals = () => {
   const dispatch = useDispatch();

   const handleOpen = (goal: GoalsDataType) => {
      dispatch(currentGoalActions.add(goal));
   };
   const handleOnClose = () => {};

   return (
      <section id='celi'>
         <div className='std-container'>
            <div>
               <Title>Целевые сборы</Title>
               <div className='flex justify-between items-stretch max-1300:flex-wrap max-1300:max-w-[1100px] max-1300:mx-auto max-1300:gap-5 max-1300:justify-center max-1100:flex-col max-1100:items-center'>
                  {goalsData.map(goal => (
                     <article
                        key={goal.id}
                        className='relative rounded-stdRadius bg-mainGreen text-mainBg max-w-[30%] text-center overflow-hidden cursor-pointer duration-200 hover:scale-[1.01] max-1300:max-w-[45%] max-1100:max-w-[500px] '
                     >
                        <div className='relative z-10 flex flex-col items-center gap-5 py-[45px] px-8 max-500:px-4 max-500:gap-2.5'>
                           <Image
                              imgBoxClassName='relative z-10 h-[300px] max-500:max-w-[200px] max-500:h-auto'
                              imgClassName='rounded-stdRadius'
                              src={goal.img}
                              alt={goal.name}
                           />
                           <div>
                              <Subtitle className='max-w-[80%] mx-auto'>{goal.name}</Subtitle>
                              <Text className='text-lg'>{goal.description}</Text>
                           </div>
                           <div className='mt-auto w-full flex flex-col items-center'>
                              <div className='mb-10 max-500:mb-5'>
                                 <Subtitle className='!mb-2'>Осталось: {goal.remains}</Subtitle>
                                 <Text>Нужно собрать: {goal.allPrice}</Text>
                              </div>
                              <Button
                                 primary
                                 theme={ButtonThemes.INVERTED}
                                 link={true}
                                 to={AppRoutes.GOAL}
                                 onClick={() => handleOpen(goal)}
                              >
                                 Поддержать
                              </Button>
                           </div>
                        </div>
                        <Image
                           imgBoxClassName='absolute -bottom-[100px] -right-2/4 w-[140%] opacity-35'
                           src='/zvezdaGreen.webp'
                           alt='звезда'
                        />
                     </article>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};
