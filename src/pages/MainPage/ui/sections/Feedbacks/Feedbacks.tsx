import { RUBLE } from 'shared/components/Сonst/const';
import { Image } from 'shared/ui/Image/Image';
import { Subtitle } from 'shared/ui/Subtitle/Subtitle';
import { Title } from 'shared/ui/Title/Title';

export const Feedbacks = () => {
   interface Review {
      id: number;
      name: string;
      text: string;
      date: string;
      price: string;
      anonym?: boolean;
   }

   const reviews: Review[] = [
      {
         id: 1,
         name: 'Елена Васильева',
         text: 'Очень важно не оставаться равнодушными и помогать тем, кто защищает нашу страну. Ваша поддержка — настоящий подарок.',
         date: '2025-05-05',
         price: '1500',
      },
      {
         id: 2,
         name: 'Дмитрий Ковалёв',
         text: 'Спасибо фонду за то, что вы делаете. Надеюсь, таких инициатив станет больше, и мы сможем помочь каждому нуждающемуся.',
         date: '2025-04-28',
         price: '1500',
      },
      {
         id: 3,
         name: 'Анна Морозова',
         text: 'Пусть у всех будет возможность поддерживать наших героев. Желаю всем здоровья и мира!',
         date: '2025-06-01',
         price: '5000',
      },
      {
         id: 4,
         name: 'Анонимный благотворитель',
         text: 'Пусть у всех будет возможность поддерживать наших героев. Желаю всем здоровья и мира!',
         date: '2025-06-01',
         price: '2550',
         anonym: true,
      },
      {
         id: 5,
         name: 'Анонимный благотворитель',
         text: 'Пусть у всех будет возможность поддерживать наших героев. Желаю всем здоровья и мира!',
         date: '2025-06-01',
         price: '3050',
      },
   ];

   return (
      <section>
         <div className='std-container'>
            <div className='max-1100:max-w-[500px] max-1100:mx-auto'>
               <Title>Ваши пожертвования</Title>
               <Subtitle className='text-center mb-10'>
                  Каждое ваше пожертвование — это не просто финансовая помощь, это акт поддержки и заботы о тех, кто
                  стоит на защите нашей страны. Благодаря вашей щедрости мы можем обеспечить необходимое лечение,
                  психологическую реабилитацию и социальную поддержку нашим героям и их семьям.
               </Subtitle>
               <div>
                  <ul className='flex flex-col justify-center items-center gap-5'>
                     {reviews.map(({ id, name, text, date, price }, index) => (
                        <li
                           key={id}
                           className={`relative max-w-[900px] flex flex-col items-center gap-5 p-8 max-500:p-5 bg-mainGreen text-mainBg rounded-stdRadius cursor-pointer duration-200 overflow-hidden hover:scale-[1.01] ${
                              index % 2 !== 0 ? 'ml-[200px] max-1100:ml-0' : 'mr-[200px] max-1100:mr-0'
                           }`}
                        >
                           <div className='relative z-10'>
                              <div className='mb-5'>
                                 <div className='flex items-center gap-5 mb-3'>
                                    <Image
                                       src='/user.webp'
                                       imgBoxClassName='w-[70px] h-[70px]'
                                       imgClassName='rounded-stdRadius'
                                       alt='аватар'
                                    />
                                    <div className='max-w-[80%]'>
                                       <p className='font-bold'>{name}</p>
                                       <em>({new Date(date).toLocaleDateString('ru-RU')})</em>
                                    </div>
                                 </div>
                                 <p>{text}</p>
                              </div>
                              <p className='relative z-10 ml-auto bg-mainBg text-mainGreen py-3 px-10 rounded-2xl font-bold w-fit'>
                                 {price + ' ' + RUBLE}
                              </p>
                           </div>
                           <Image
                              src='/zvezdaGreen.webp'
                              alt='звезда'
                              imgBoxClassName='absolute z-0 top-[-60px] right-[-120px] opacity-35 max-w-[400px]'
                           />
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
};
