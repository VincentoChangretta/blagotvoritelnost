import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { BASE_URL } from 'shared/types/types';
import { Logo } from 'widgets/Logo/Logo';

export const Header = () => {
   const [burger, setBurger] = useState<boolean>(false);

   const handleOpenNav = () => {
      setBurger(true);
   };

   const handleCloseNav = () => {
      setBurger(false);
   };

   return (
      <header className=' bg-mainGreen mb-10'>
         <div
            className={`fixed z-1000 inset-0 backdrop-blur-2xl duration-300 hidden max-1300:block ${
               burger ? 'opacity-100' : 'opacity-0 invisible'
            }`}
            onClick={handleCloseNav}
         ></div>
         <div className='std-container'>
            <div className='flex items-center justify-between text-mainBg py-5'>
               <Logo />

               <div className='hidden text-4xl cursor-pointer max-1300:block' onClick={handleOpenNav}>
                  <FontAwesomeIcon icon={faBars} />
               </div>

               <nav
                  className={`max-1300:fixed max-1300:right-0 max-1300:top-0 max-1300:bottom-0 max-1300:bg-mainGreen-light max-1300:z-1000 max-1300:p-8 max-500:p-5 max-1300:flex max-1300:justify-center max-1300:items-center max-1300:max-w-[350px] max-1300:w-full max-1300:duration-200 ${
                     !burger && 'max-1300:translate-x-full'
                  }`}
               >
                  <div
                     className='hidden absolute top-[50px] right-2.5 text-4xl cursor-pointer max-1300:block '
                     onClick={handleCloseNav}
                  >
                     <FontAwesomeIcon icon={faX} />
                  </div>
                  <ul className='relative flex gap-5 font-bold max-1300:flex-col max-1300:text-center max-1300:items-center'>
                     <li>
                        <a href={`${BASE_URL}#fond`} onClick={handleCloseNav}>
                           О фонде
                        </a>
                     </li>
                     <li>
                        <a href={`${BASE_URL}#podderjka`} onClick={handleCloseNav}>
                           Поддержать
                        </a>
                     </li>
                     <li>
                        <a href={`${BASE_URL}#volonter`} onClick={handleCloseNav}>
                           Стать волонтером
                        </a>
                     </li>
                     <li>
                        <a href={`${BASE_URL}#kontakt`} onClick={handleCloseNav}>
                           Контакты
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   );
};
