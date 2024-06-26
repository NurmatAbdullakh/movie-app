export interface IMoviesResponse {
  data: {
    movies: Array<IMovie>;
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
  code: number;
  message: string;
  status: boolean;
  tasix: boolean;
}
export interface IMovie {
  ageLimit: number;
  cardType: string;
  countries: Array<{ id: number; slug: string; title: string }>;
  genres: Array<{ id: number; slug: string; title: string }>;
  id: number;
  isFavourite: boolean;
  isFree: boolean;
  isNew: boolean;
  isSerial: boolean;
  moduleId: number;
  moduleSlug: string;
  poster: string;
  quality: string;
  title: string;
  titleEn: string;
  year: number;
}

export interface IMovieDetailsResponse {
  data: IMovieDetails;
  code: number;
  message: string;
  status: boolean;
  tasix: boolean;
}

export interface IMovieDetails {
  description: string;
  id: number;
  poster: string;
  title: string;
  year: number;
  genres: Array<{ id: number; slug: string; title: string }>;
  countries: Array<{ id: number; slug: string; title: string }>;
  actors: Array<{ id: number; fullName: string; photo: string }>;
}
