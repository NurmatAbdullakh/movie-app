import { IMovie } from "@/api/movies/movies.types";
import styles from "./MovieCard.module.scss";
import Link from "next/link";
import Image from "next/image";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  return (
    <Link href={`/${movie.id}`} className={styles.movie_card}>
      <Image
        className={styles.movie_poster}
        src={movie.poster}
        alt={movie.title}
        fill
        priority
      />
      <div className={styles.movie_overlay} />
      <div className={styles.movie_details}>
        <h3 className={`${styles.movie_title} xl-700`}>{movie.title}</h3>
        <p className={`${styles.movie_year} sm-500`}>{movie.year}</p>
        <div className={styles.movie_genre_list}>
          {movie.genres.map((genre) => (
            <p key={genre.id} className={`${styles.movie_genre} xs`}>
              {genre.title}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
