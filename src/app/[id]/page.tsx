import { IMovieDetailsResponse } from "@/api/movies/movies.types";
import { FC } from "react";
import MovieDetails from "../_components/MovieDetails/MovieDetails";

interface Params {
  id: string;
}

const fetchMovieDetails = async (movieId: string) => {
  const res = await fetch(
    `https://api.cinerama.uz/test/movies/view?module_id=3&id=${movieId}`,
    {
      headers: {
        Authorization: `Bearer DrTVm2Bi8pHE75xYsM94fjciuAhju2XM`,
      },
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error(`Server-side fetch failed with status ${res.status}`);
  }

  return res.json();
};

const SingleMoviePage: FC<{ params: Params }> = async ({ params }) => {
  try {
    const data: IMovieDetailsResponse = await fetchMovieDetails(params.id);

    return <MovieDetails details={data.data} />;
  } catch (error: any) {
    return <div style={{ color: "white" }}>Error: {error.message}</div>;
  }
};

export default SingleMoviePage;
