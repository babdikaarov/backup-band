import { FC } from "react";
import styles from "../../../scss/partials/ui/_hero.module.scss";

interface HeroTextProps {
   header: string;
   paragraph: string;
}

const HeroText: FC<HeroTextProps> = ({ header, paragraph }) => {
   return (
      <div className="container">
         <div className={styles.text}>
            <h1 className={styles.heroH1}>{header}</h1>
            <h6 className={styles.paragraph}>{paragraph}</h6>
         </div>
      </div>
   );
};

export default HeroText;
