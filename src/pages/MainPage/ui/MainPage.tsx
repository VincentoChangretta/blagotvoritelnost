import { AboutUs } from './sections/AboutUs/AboutUs';
import { Donation } from './sections/Donation/Donation';
import { Feedbacks } from './sections/Feedbacks/Feedbacks';
// import { Gerb } from './sections/Gerb/Gerb';
import { Goals } from './sections/Goals/Goals';
import { MainTop } from './sections/MainTop/MainTop';
import { OurMission } from './sections/OurMission/OurMisson';
import { Reports } from './sections/Reports/Reports';
import { VideoReports } from './sections/Reports/ui/VideoReports';
import { Volunteer } from './sections/Volunteer/Volunteer';

export const MainPage = () => {
   return (
      <>
         <MainTop />
         {/* <Gerb /> */}
         <AboutUs />
         <OurMission />
         <Volunteer />
         <Goals />
         <Feedbacks />
         <Reports />
         <VideoReports />
         <Donation />
      </>
   );
};
