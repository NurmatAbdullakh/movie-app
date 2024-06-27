"use client";

import { useMoviesGetAllInfiniteQuery } from "@/api/movies/movies.service";
import useIntersectionObserver from "@/hooks/useIntersectiongObserver";
import { useEffect, useRef } from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviesList.module.scss";
import Loader from "../Loader/Loader";

export const MoviesList = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [intersecting] = useIntersectionObserver(targetRef);

  const { data, fetchNextPage, isLoading, isFetching } =
    useMoviesGetAllInfiniteQuery();

  useEffect(() => {
    if (intersecting) {
      fetchNextPage();
    }
  }, [intersecting]);

  const movies = data?.pages.flatMap((page) => page?.data?.movies) || [];

  return (
    <section className={styles.movies}>
      <div className={styles.movies_cards}>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div style={{ height: "10px" }} ref={targetRef} />
      <div className={styles.movies_loader}>
        {isLoading || (isFetching && <Loader />)}
      </div>
    </section>
  );
};
