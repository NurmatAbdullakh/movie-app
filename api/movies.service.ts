export const fetchMovieDetails = async (movieId: string) => {
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
