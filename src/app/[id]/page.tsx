"use client";
import { useMoviesGetByIdQuery } from "@/api/movies/movies.service";
import MovieDetails from "../_components/MovieDetails/MovieDetails";

export default function SingleMoviePage({
  params,
}: {
  params: { id: string };
}) {
  const { data } = useMoviesGetByIdQuery(Number(params.id));

  return <MovieDetails details={data?.data} />;
}
