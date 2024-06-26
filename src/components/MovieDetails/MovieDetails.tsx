"use client";

import { IMovieDetails } from "@/api/movies/movies.types";
import styles from "./Moviedetails?.module.scss";
import Image from "next/image";

interface props {
  details: IMovieDetails;
}
const MovieDetails = ({ details }: props) => {
  return (
    <div className={styles.movie_details}>
      <div className={styles.movie_details__container}>
        <div className={styles.movie_details__banner}>
          <Image
            className={styles.movie_details__overlay}
            src={details?.poster}
            alt={details?.title}
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
            src={details?.poster}
            alt={details?.title}
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

        <div className={styles.section_title}>Жанр</div>
        <div className={styles.movie_details__genres_list}>
          {details?.genres?.map((genre) => (
            <p key={genre.id} className={`${styles.movie_details__badge} xs`}>
              {genre.title}
            </p>
          ))}
        </div>

        <div className={styles.section_title}>Страна</div>
        <div className={styles.movie_details__country}>
          {details?.countries?.map((genre) => (
            <p key={genre.id} className={`${styles.movie_details__badge} xs`}>
              {genre.title}
            </p>
          ))}
        </div>
        {details?.actors && (
          <>
            <div className={styles.section_title}>Актеры</div>
            <div className={styles.movie_details__actors}>
              {details?.actors
                ?.filter((a) => a.photo)
                ?.map((actor) => (
                  <div
                    key={actor.id}
                    className={styles.movie_details__actors_card}
                  >
                    <Image
                      className={styles.actors__image}
                      src={actor.photo}
                      alt={actor.fullName}
                      width={60}
                      height={60}
                    />
                    <div className={styles.actors__name}>{actor.fullName}</div>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
