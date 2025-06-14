import { BASE_URL, LOGO } from 'shared/types/types';
import { Image } from 'shared/ui/Image/Image';

interface LogoProps {
   className?: string;
}

export const Logo = (props: LogoProps) => {
   const { className } = props;
   return (
      <div className={`${className} max-500:max-w-[200px]`}>
         <a href={`${BASE_URL}`} className='inline-block w-fit'>
            <Image imgBoxClassName={`max-w-[250px] `} src={LOGO} alt='лого' />
         </a>
      </div>
   );
};
