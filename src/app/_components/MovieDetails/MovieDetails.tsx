import { IMovieDetails } from "@/api/movies/movies.types";
import styles from "./MovieDetails.module.scss";
import Image from "next/image";
import Actors from "../Actors/Actors";
import SectionTitle from "../SectionTitle/Sectiontitle";

interface props {
  details: IMovieDetails | undefined;
}
const MovieDetails = ({ details }: props) => {
  console.log("details", details);

  return (
    <div className={styles.movie_details}>
      <div className={styles.movie_details__container}>
        <div className={styles.movie_details__banner}>
          <Image
            className={styles.movie_details__overlay}
            src={details?.poster || ""}
            alt={details?.title || ""}
            fill
          />
          <Image
            src="/images/overlay.png"
            className={styles.movie_details__overlay}
            alt="overlay"
            fill
          />
          <Image
            className={styles.movie_details__poster}
            src={details?.poster || ""}
            alt={details?.title || ""}
            fill
          />
        </div>
        <h1 className={styles.movie_details__title}>{details?.title}</h1>
        <div className={`${styles.movie_details__year} xl-500`}>
          {details?.year}
        </div>
        <div className={`${styles.movie_details__description} md`}>
          {details?.description}
        </div>

        {details?.genres && (
          <>
            <SectionTitle title="Жанр" />

            <div className={styles.movie_details__genres_list}>
              {details?.genres?.map((genre) => (
                <p
                  key={genre.id}
                  className={`${styles.movie_details__badge} xs`}
                >
                  {genre.title}
                </p>
              ))}
            </div>
          </>
        )}

        {details?.countries && (
          <>
            <SectionTitle title="Страна" />
            <div className={styles.movie_details__country}>
              {details?.countries?.map((genre) => (
                <p
                  key={genre.id}
                  className={`${styles.movie_details__badge} xs`}
                >
                  {genre.title}
                </p>
              ))}
            </div>
          </>
        )}
        {details?.actors && (
          <>
            <SectionTitle title="Актеры" />
            <Actors actors={details?.actors} />
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
