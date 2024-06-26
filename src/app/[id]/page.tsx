import MovieDetails from "../_components/MovieDetails/MovieDetails";

export default async function SingleMoviePage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://api.cinerama.uz/test/movies/view?module_id=3&id=${params.id}`,
    {
      headers: {
        Authorization: "Bearer DrTVm2Bi8pHE75xYsM94fjciuAhju2XM",
      },
    }
  );

  const repo = await res.json();

  return <MovieDetails details={repo.data} />;
}
