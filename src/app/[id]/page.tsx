import { FC } from "react";

// Define types for the parameters and movie data
interface Params {
  id: string;
}

interface MovieData {
  status: boolean;
  code: number;
  message: string;
  tasix: boolean;
  data: any[]; // Adjust this type based on the actual data structure
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
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error(`Server-side fetch failed with status ${res.status}`);
    }

    // Parse the JSON response
    const data: MovieData = await res.json();
    console.log("Fetched data:", data);

    if (data.data.length === 0) {
      console.warn("No movie found for ID:", params.id);
    }

    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error: any) {
    console.error("Fetch error:", error.message);
    return <div>Error: {error.message}</div>;
  }
};

export default SingleMoviePage;
