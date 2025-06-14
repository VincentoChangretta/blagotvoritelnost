import { Portal } from '../Portal/Portal';
import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

export enum ModalTheme {
   STANDART = 'bg-mainBg text-mainBg-inv',
   INVERTED = 'bg-mainBg-inv text-mainBg',
}

interface ModalProps {
   children: ReactNode;
   className?: string;
   onClose?: () => void;
   theme: ModalTheme;
}

export const Modal = (props: ModalProps) => {
   const { className, children, onClose, theme } = props;

   const handleClose = () => {
      if (onClose) {
         onClose();
      }
   };

   return (
      <Portal element={document.querySelector('.app') || document.querySelector('body')}>
         <div
            className={`fixed z-[9000] p-50 inset-0 flex items-center justify-center backdrop-blur-xl bg-alphaBlack ${className}`}
            onClick={handleClose}
         >
            <div
               onClick={e => e.stopPropagation()}
               className={`relative flex flex-col justify-center max-w-[50%] max-h-[80svh] w-full min-h-[200px] p-[30px] pr-[50px] rounded-stdRadius shadow-2xl ${theme} max-500:pl-[20px] overflow-y-scroll overflow-x-hidden`}
            >
               <button
                  className={`flex justify-center items-center absolute right-[20px] top-[20px] w-10 h-10 rounded-full bg-main cursor-pointer transition duration-500 hover:rotate-180 max-500:w-7 max-500:h-7 max-500:top-[15px] max-500:right-[15px] ${
                     theme === ModalTheme.STANDART ? 'bg-mainBg-inv text-mainBg' : 'bg-mainBg text-mainBg-inv'
                  }`}
                  onClick={handleClose}
               >
                  <FontAwesomeIcon icon={faX} />
               </button>
               {children}
            </div>
         </div>
      </Portal>
   );
};
