import { IMovieDetailsResponse } from "@/api/movies/movies.types";
import { FC } from "react";
import MovieDetails from "../_components/MovieDetails/MovieDetails";
import { fetchMovieDetails } from "../../../api/movies.service";

interface Params {
  id: string;
}

const SingleMoviePage: FC<{ params: Params }> = async ({ params }) => {
  try {
    const data: IMovieDetailsResponse = await fetchMovieDetails(params.id);

    return <MovieDetails details={data.data} />;
  } catch (error: any) {
    return <div style={{ color: "white" }}>Error: {error.message}</div>;
  }
};

export default SingleMoviePage;
