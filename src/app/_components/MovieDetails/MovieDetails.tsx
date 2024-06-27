import { IMovieDetails } from "@/api/movies/movies.types";
import styles from "./MovieDetails.module.scss";
import Actors from "../Actors/Actors";
import SectionTitle from "../SectionTitle/Sectiontitle";
import dynamic from "next/dynamic";
import Badges from "../Badges/Badges";

//! fix : Error Hydration failed because the initial UI does not match what was rendered on the server.
const VideoPlayer = dynamic(() => import("../VideoPlayer/VideoPlayer"), {
  ssr: false,
});

interface props {
  details: IMovieDetails | undefined;
}

const MovieDetails = ({ details }: props) => {
  const haveGenres = details?.genres?.length;
  const haveCountries = details?.countries?.length;
  const haveActors = details?.actors?.length;

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
          <p className={`${styles.movie_details__description} md`}>
            {details?.description}
          </p>

          {haveGenres && (
            <section className={styles.movie_details__genres}>
              <SectionTitle title="Жанр" />
              <Badges data={details?.genres} />
            </section>
          )}

          {haveCountries && (
            <section className={styles.movie_details__countries}>
              <SectionTitle title="Страна" />
              <Badges data={details?.countries} />
            </section>
          )}

          {haveActors && (
            <section className={styles.movie_details__actors}>
              <SectionTitle title="Актеры" />
              <Actors actors={details?.actors} />
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
