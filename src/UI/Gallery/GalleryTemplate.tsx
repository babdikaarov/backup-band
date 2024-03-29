import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./gallery/_gallery.module.scss";

type GalleryTemplateProps = {
  galleryData: {
    eventID: number;
    name: string;
    date: string;
    description: string;
    poster: string;
    items: {
      alt: string;
      src: string;
      view: string;
    }[];
  }[];
};

const GalleryTemplate: FC<GalleryTemplateProps> = ({ galleryData }) => {
  const [events, setEvents] = useState(galleryData);
  useEffect(() => {
    if (galleryData) {
      setEvents(galleryData);
    }
  }, [galleryData]);

  return (
    <div className={styles.gallery}>
      {events.map((event, i) => (
        <React.Fragment key={event.eventID + i}>
          <div className={styles.galleryCards}>
            {/* <Link to={`/gallery/${event.eventID}`}> */}
            <Link to={`/gallery/${i}`}>
              <img src={event.poster} alt={event.name} />
              <div className={styles.galleryCardsContent}>
                <p>{event.date}</p>
                <h4>{`Id of event ${`array index ${i}`}`}</h4>
              </div>
            </Link>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default GalleryTemplate;
