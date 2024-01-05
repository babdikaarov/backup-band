import SectionWrapper from "../SectionWrapper/SectionWrapper";
import styles from "../../scss/partials/ui/_aboutTemplate.module.scss";
import { FC } from "react";

interface AboutTemplateProps {
  header: string;
  text: string;
  poster: string;
}

const AboutTemplate: FC<AboutTemplateProps> = ({ header, poster, text }) => {
  return (
    <SectionWrapper header={header} id="about">
      <div className={styles.about}>
        <article className={styles.article}>
          <div className={styles.truncate}>
            {text
              .split(".")
              .slice(0, -1)
              .map((newLine, i) => (
                <p key={i} className={styles.text}>
                  {newLine + "."}
                </p>
              ))}
          </div>
        </article>
        <img src={poster} alt="About Poster" />
      </div>
    </SectionWrapper>
  );
};

export default AboutTemplate;
