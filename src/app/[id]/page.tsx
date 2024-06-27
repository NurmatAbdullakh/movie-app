import { GetServerSideProps } from "next";

interface Params {
  id: string;
}

interface MovieData {
  status: boolean;
  code: number;
  message: string;
  tasix: boolean;
  data: any[]; // Adjust this type based on the actual structure of your data
}

export default async function SingleMoviePage({ params }: { params: Params }) {
  try {
    console.log("Fetching movie with ID:", params.id); // Log the movie ID

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

    const data: MovieData = await res.json();
    console.log("Fetched data:", data); // Log the fetched data

    if (data.data.length === 0) {
      console.warn("No movie found for ID:", params.id); // Log a warning if data is empty
    }

    return <>{JSON.stringify(data)}</>;
  } catch (error: any) {
    console.error("Fetch error:", error.message); // Log any fetch errors
    return <>Error: {error.message}</>;
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  return {
    props: {
      params: { id },
    },
  };
};
