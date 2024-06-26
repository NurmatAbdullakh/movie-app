"use client";
import { IMovie } from "@/api/movies/movies.types";

interface props {
  details: IMovie;
}
const MovieDetails = ({ details }: props) => {
  console.log(details);

  return <div>MovieDetails</div>;
};

export default MovieDetails;
