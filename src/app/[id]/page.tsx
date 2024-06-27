export default async function SingleMoviePage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const res = await fetch(
      `https://api.cinerama.uz/test/movies/view?module_id=3&id=${params.id}`,
      {
        headers: {
          Authorization: `Bearer DrTVm2Bi8pHE75xYsM94fjciuAhju2XM`,
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error(`Server-side fetch failed with status ${res.status}`);
    }

    const data = await res.json();
    console.log("Server-side fetch data:", data);

    return <div style={{ color: "white" }}>{JSON.stringify(data)}</div>;
  } catch (error: any) {
    console.error("Server-side fetch error:", error.message);
    return <div style={{ color: "white" }}>Error: {error.message}</div>;
  }
}
