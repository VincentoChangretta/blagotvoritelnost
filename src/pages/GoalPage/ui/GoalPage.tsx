import { useScrollToTop } from 'shared/lib/hooks/useScrollToTop/useScrollToTop';
import { MainGoal } from './sections/MainGoal';

export const GoalPage = () => {
   useScrollToTop();
   return (
      <>
         <MainGoal />
      </>
   );
};
