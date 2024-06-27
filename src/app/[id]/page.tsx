import { IMovieDetailsResponse } from "@/api/movies/movies.types";
import { FC } from "react";
import MovieDetails from "../_components/MovieDetails/MovieDetails";

// Define types for the parameters and movie data
interface Params {
  id: string;
}

// Define the server component for fetching and displaying the movie data
const SingleMoviePage: FC<{ params: Params }> = async ({ params }) => {
  try {
    console.log("Fetching movie with ID:", params.id);

    // Fetch the movie data
    const res = await fetch(
      `https://api.cinerama.uz/test/movies/view?module_id=3&id=${params.id}`,
      {
        headers: {
          Authorization: `Bearer DrTVm2Bi8pHE75xYsM94fjciuAhju2XM`,
        },
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error(`Server-side fetch failed with status ${res.status}`);
    }

    // Parse the JSON response
    const data: IMovieDetailsResponse = await res.json();
    console.log("Fetched data:", data);

    // return <>{JSON.stringify(data)}</>;
    return <MovieDetails details={data.data} />;
  } catch (error: any) {
    console.error("Fetch error:", error.message);
    return <div>Error: {error.message}</div>;
  }
};

export default SingleMoviePage;
