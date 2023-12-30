<<<<<<< HEAD
import HeroTemplate from "../../../UI/Hero/HeroTemplate";
import SignLesson from "../../../UI/Hero/SignLessonButton";
import { getHeroData } from "../../../components/BandComponents/Hero/temp/getHeroData";
import "../../../scss/partials/ui/_hero.module.scss";
import HeroText from "./HeroText";

const HeroStudio = () => {
   return (
      <HeroTemplate {...getHeroData.studioHero}>
         <HeroText
            header="Откройте двери в мир музыки с Coolstudio"
            paragraph="Очарование кавербэнда, магия танцевального шоу, творчество в студии — воплощаем вашу музыкальную мечту!"
         />
         <SignLesson whatsapp={getHeroData.bandHero.contacts} />
      </HeroTemplate>
   );
=======
import HeroStud from "../../../UI/Hero/HeroStudio/HeroStud";
import SignLessonButton from "../../../UI/Hero/HeroStudio/SignLessonButton";
import HeroTemplate from "../../../UI/Hero/HeroTemplate";
import "../../../scss/partials/coolStudio/_heroStudio.module.scss";
import { GetHeroStudio } from "./temp/getHeroStudio";

const HeroStudio = () => {
  // return <HeroStud {...GetHeroStudio} />;
  return (
    <HeroTemplate {...GetHeroStudio}>
      <h1></h1>
      <h6></h6>
      <SignLessonButton whatsapp={""} />
    </HeroTemplate>
  );
>>>>>>> 7e1fbbb (fix components)
};
export default HeroStudio;
