import { IMovieDetailsResponse } from "@/api/movies/movies.types";
import { FC } from "react";
import MovieDetails from "../_components/MovieDetails/MovieDetails";

interface Params {
  id: string;
}
export const dynamic = "force-dynamic";

const SingleMoviePage: FC<{ params: Params }> = async ({ params }) => {
  try {
    const res = await fetch(
      `https://api.cinerama.uz/test/movies/view?module_id=3&id=${params.id}`,
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

    const data: IMovieDetailsResponse = await res.json();

    return <MovieDetails details={data.data} />;
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }
};

export default SingleMoviePage;
