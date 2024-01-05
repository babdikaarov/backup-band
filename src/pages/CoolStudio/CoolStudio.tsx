import AboutStudio from "../../components/StudioComponents/AboutStudio/AboutStudio";
import Concert from "../../components/StudioComponents/Concerts/Concert.tsx";
import ContactUsStudio from "../../components/StudioComponents/ContactUS/ContactUsStudio.tsx";
import Courses from "../../components/StudioComponents/Courses/Courses.tsx";
import HeroStudio from "../../components/StudioComponents/HeroStudio/HeroStudio.tsx";
import OurStudents from "../../components/StudioComponents/OurStudents/OurStudent.tsx";
import StudentsFeedback from "../../components/StudioComponents/StudentsFeedback/StudentsFeedback.tsx";
const CoolStudio = () => {
   return (
      <>
         <HeroStudio />
         <AboutStudio />
         <Courses />
         <StudentsFeedback />
         <Concert />
         <OurStudents />
         <ContactUsStudio />
      </>
   );
};

export default CoolStudio;
