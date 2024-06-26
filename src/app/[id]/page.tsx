"use client";
import { moviesService } from "@/api/movies/movies.service";
import MovieDetails from "../_components/MovieDetails/MovieDetails";
import { useEffect, useState } from "react";
import { IMovieDetails } from "@/api/movies/movies.types";

export default function SingleMoviePage({
  params,
}: {
  params: { id: string };
}) {
  const [details, setDetails] = useState<IMovieDetails>();

  useEffect(() => {
    if (params?.id)
      moviesService.getMovieById(Number(params.id)).then((res) => {
        setDetails(res.data);
      });
  }, [params?.id]);

  return <MovieDetails details={details} />;
}
