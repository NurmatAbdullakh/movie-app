import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { request } from "../request";
import { IMoviesResponse, IMovieDetailsResponse } from "./movies.types";

export const moviesService = {
  getMovies: (params: {
    page: number;
    items: number;
  }): Promise<IMoviesResponse> => request.get("movies?module_id=3", { params }),

  getMovieById: (id: number): Promise<IMovieDetailsResponse> =>
    request.get("movies/view?module_id=3", { params: { id } }),
};

export const useMoviesGetAllInfiniteQuery = () => {
  return useInfiniteQuery<IMoviesResponse, Error>({
    queryKey: ["MOVIES_GETALL_INFINITE"],
    queryFn: ({ pageParam }) =>
      moviesService.getMovies({ page: Number(pageParam), items: 10 }),
    refetchOnWindowFocus: false,
    retry: 1,
    refetchOnReconnect: false,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage?.data?.currentPage
        ? lastPage.data.currentPage + 1
        : undefined;
    },
  });
};

export const useMoviesGetByIdQuery = (id: number) =>
  useQuery<IMovieDetailsResponse>({
    queryKey: ["MOVIES_GETBYID"],
    queryFn: () => moviesService.getMovieById(id),
    refetchOnWindowFocus: false,
    retry: 1,
    refetchOnReconnect: false,
  });
