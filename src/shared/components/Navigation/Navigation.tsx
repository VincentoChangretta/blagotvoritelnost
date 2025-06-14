import { t } from 'i18next';
import { Link } from 'react-router-dom';
import { NavigationDataType } from 'shared/config/routesConfig/navigation';

interface NavigationProps {
   data: NavigationDataType[];
   className?: string;
}

export const Navigation = (props: NavigationProps) => {
   const { data, className } = props;
   return (
      <nav className={className}>
         <ul className='flex items-center gap-5 '>
            {data.map((item, index) => (
               <li key={index}>
                  {item.path.startsWith('/#') ? (
                     <a className='text-xl font-bold' href={item.path}>
                        {t(item.name)}
                     </a>
                  ) : (
                     <Link className='text-xl font-bold' to={item.path}>
                        {t(item.name)}
                     </Link>
                  )}
               </li>
            ))}
         </ul>
      </nav>
   );
};
