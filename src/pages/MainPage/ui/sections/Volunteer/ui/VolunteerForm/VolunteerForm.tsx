import { useState } from 'react';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Image } from 'shared/ui/Image/Image';
import { Input, InputThemes } from 'shared/ui/Input/Input';
import { PhoneInput } from 'shared/ui/Input/PhoneInput';
import { Subtitle } from 'shared/ui/Subtitle/Subtitle';

export const VolunteerForm = () => {
   const [phoneValue, setPhoneValue] = useState<string | null>(null);

   return (
      <form className='relative overflow-hidden w-full bg-mainGreen p-8 max-500:p-5 rounded-stdRadius'>
         <div className='relative z-10 flex flex-col items-center  w-full'>
            <Subtitle className='text-4xl text-center text-mainBg'>Регистрация </Subtitle>
            <div className='flex flex-col gap-5 max-w-[500px] w-full mb-7'>
               <Input
                  required
                  placeholder='Имя'
                  placeholderStyles='text-center mb-2'
                  truePlaceholder='Иван'
                  theme={InputThemes.WITH_GLASS}
                  inputStyles='text-center text-2xl max-500:text-xl'
               />
               <PhoneInput
                  placeholder='Номер телефона'
                  placeholderStyles='text-center mb-2'
                  theme={InputThemes.WITH_GLASS}
                  onChange={setPhoneValue}
                  inputStyles='text-center text-2xl max-500:text-xl'
               />
            </div>
            <Button theme={ButtonThemes.INVERTED}>Зарегистрироваться</Button>
         </div>
         <Image
            imgBoxClassName='absolute -bottom-[50px] -right-[100px] max-w-[590px] opacity-35'
            src='/zvezdaGreen.webp'
            alt='звезда'
         />
      </form>
   );
};
