import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export interface OptionsType {
   text: string;
   link: string;
}

interface DropDownProps {
   className?: string;
   activeOption: string;
   options: OptionsType[];
   activeOptionStyles?: string;
   listStyles?: string;
}

export const DropDown = (props: DropDownProps) => {
   const { className, options, activeOption, activeOptionStyles, listStyles } = props;

   const dropDownRef = useRef(null);
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const handleOpen = () => {
      setIsOpen(prev => !prev);
   };

   useEffect(() => {
      const ref = dropDownRef.current;
      if (!ref) return;

      const handleMouseEnter = () => setIsOpen(true);
      const handleMouseLeave = () => setIsOpen(false);

      ref.addEventListener('mouseenter', handleMouseEnter);
      ref.addEventListener('mouseleave', handleMouseLeave);

      return () => {
         ref.removeEventListener('mouseenter', handleMouseEnter);
         ref.removeEventListener('mouseleave', handleMouseLeave);
      };
   }, []);

   return (
      <div ref={dropDownRef} className='relative z-50'>
         <div
            onClick={handleOpen}
            className={`flex items-center justify-center gap-2.5 p-[15px] px-[35px] text-center rounded-stdRadius transition duration-200  ${activeOptionStyles} ${
               isOpen && 'bg-mainPink border-mainPink'
            }`}
         >
            <p>{activeOption}</p>
            <FontAwesomeIcon className={`transition duration-200 ${isOpen && 'rotate-180'} `} icon={faAngleDown} />
         </div>
         {isOpen && (
            <ul
               className={`absolute z-50 top-full right-0 left-0 p-[20px] rounded-stdRadius text-center transition duration-200 ${listStyles}`}
            >
               {options.map((option, index) => (
                  <li
                     className='p-[15px] rounded-stdRadius  transition duration-200 hover:bg-mainPink hover:text-mainBg-inv'
                     key={index}
                  >
                     <Link to={option.link}>{option.text}</Link>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};
