import { moviesService } from "@/api/movies/movies.service";
import MovieDetails from "../_components/MovieDetails/MovieDetails";

export default async function SingleMoviePage({
  params,
}: {
  params: { id: string };
}) {
  const data = await moviesService.getMovieById(Number(params.id));
  const details = data.data;

  return <MovieDetails details={details} />;
}
