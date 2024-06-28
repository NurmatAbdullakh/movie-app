"use client";
import { FC } from "react";
import MovieDetails from "../_components/MovieDetails/MovieDetails";
import { useMoviesGetByIdQuery } from "@/api/movies/movies.service";

interface Params {
  id: string;
}

const SingleMoviePage: FC<{ params: Params }> = ({ params }) => {
  const { data } = useMoviesGetByIdQuery(+params.id);

  return <MovieDetails details={data?.data} />;
};

export default SingleMoviePage;
