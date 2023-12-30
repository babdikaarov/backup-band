import Gis2 from "../../components/BandComponents/Gis2/Gis2.tsx";
import AboutStudio from "../../components/StudioComponents/AboutStudio/AboutStudio";
import Concert from "../../components/StudioComponents/Concerts/Concert.tsx";
import Courses from "../../components/StudioComponents/Courses/Courses.tsx";
import HeroStudio from "../../components/StudioComponents/HeroStudio/HeroStudio";
import OurStudents from "../../components/StudioComponents/OurStudents/OurStudent.tsx";
import StudentsFeedback from "../../components/StudioComponents/StudentsFeedback/StudentsFeedback.tsx";
import styles from "../../scss/partials/coolBand/_gis2.module.scss";

const CoolStudio = () => {
   return (
      <>
         <HeroStudio />
         <AboutStudio />
         <Courses />
         <StudentsFeedback />
         <Concert />
         <OurStudents />
         <Gis2
            callToUs={"Запишись на пробный урок"}
            extraSpan={
               "Запишись на пробный урок. Отправь нам заявку. Наша команда свяжется с вами \n" +
               `в ближайшее время, чтобы обсудить детали и ответить на все ваши вопросы.`
            }
            toBook={"Вместе создадим неповторимую атмосферу вашего события! 🎶🌟"}
            btn={
               <a href="tel:996755608908" className={`${styles.studioBtn}`}>
                  Связаться с нами
               </a>
            }
         />
      </>
   );
};

export default CoolStudio;
