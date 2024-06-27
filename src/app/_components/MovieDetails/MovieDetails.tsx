import { IMovieDetails } from "@/api/movies/movies.types";
import styles from "./MovieDetails.module.scss";
import Actors from "../Actors/Actors";
import SectionTitle from "../SectionTitle/Sectiontitle";
import dynamic from "next/dynamic";
import Badges from "../Badges/Badges";

const VideoPlayer = dynamic(() => import("../VideoPlayer/VideoPlayer"), {
  ssr: false,
});

interface props {
  details: IMovieDetails | undefined;
}

const MovieDetails = ({ details }: props) => {
  return (
    <>
      <div className={styles.movie_details}>
        <div className={styles.movie_details__container}>
          <div className={styles.movie_details__banner}>
            <VideoPlayer />
          </div>
          <h1 className={styles.movie_details__title}>{details?.title}</h1>
          <div className={`${styles.movie_details__year} xl-500`}>
            {details?.year}
          </div>
          <div className={`${styles.movie_details__description} md`}>
            {details?.description}
          </div>

          {details?.genres?.length && (
            <div className={styles.movie_details__genres}>
              <SectionTitle title="Жанр" />
              <Badges data={details?.genres} />
            </div>
          )}

          {details?.countries?.length && (
            <div className={styles.movie_details__countries}>
              <SectionTitle title="Страна" />
              <Badges data={details?.countries} />
            </div>
          )}
          {details?.actors?.length && (
            <div className={styles.movie_details__actors}>
              <SectionTitle title="Актеры" />
              <Actors actors={details?.actors} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
