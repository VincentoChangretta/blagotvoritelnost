import React, { useState } from 'react';
import { RUBLE } from 'shared/components/Сonst/const';
import { Title } from 'shared/ui/Title/Title';
import { Subtitle } from 'shared/ui/Subtitle/Subtitle';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';

const donationAmounts = [50, 100, 200, 500, 1000, 1500, 3000, 5000];

export const Donation: React.FC = () => {
   const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

   const handleSelectAmount = (amount: number) => {
      setSelectedAmount(amount);
   };

   return (
      <section id='podderjka'>
         <div className='std-container'>
            <div className='max-1100:max-w-[500px] max-1100:mx-auto'>
               <Title>Сделайте пожертвование</Title>
               <Subtitle className='text-center mb-10'>
                  Ваши пожертвования помогают обеспечить наших героев всем необходимым — от медицинской помощи до
                  социальной поддержки. Выберите сумму и присоединитесь к числу тех, кто меняет жизни к лучшему.
               </Subtitle>

               <div className='flex flex-wrap gap-4 justify-center mb-8 max-500:gap-2'>
                  {donationAmounts.map(amount => (
                     <button
                        key={amount}
                        onClick={() => handleSelectAmount(amount)}
                        className={`text-3xl px-5 py-3 rounded-stdRadius font-bold cursor-pointer transition duration-200 max-1100:text-xl max-500:text-lg ${
                           selectedAmount === amount
                              ? 'bg-mainGreen text-mainBg'
                              : 'bg-mainBg text-mainGreen hover:bg-mainGreen-light hover:text-white'
                        }`}
                     >
                        {amount} {RUBLE}
                     </button>
                  ))}
               </div>

               <Button theme={ButtonThemes.STANDART} className='mx-auto'>
                  Пожертвовать
               </Button>
            </div>
         </div>
      </section>
   );
};
