import { Link } from 'react-router-dom';
import { Logo } from 'widgets/Logo/Logo';

export const Footer = () => {
   return (
      <footer className='bg-mainGreen text-mainBg py-5'>
         <div className='std-container'>
            <div className='flex justify-between items-center max-1100:max-w-[500px] max-1100:flex-col max-1100:gap-5 max-1100:mx-auto'>
               <Logo className='flex-1' />
               <Link to={'/'}>Политика конфиденциальности</Link>
               <div className='flex-1 text-right'>
                  <a href='tel:+79999999999'>+7 (999) 999 99 99</a>
               </div>
            </div>
         </div>
      </footer>
   );
};
