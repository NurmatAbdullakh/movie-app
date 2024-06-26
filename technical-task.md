# Technical task

**Assignment**

- You have to create mini movie website in **Next.JS (using app router and TS)**:
- You should share **your source code** (github repo) and **your work url** (which is deployed Vercel or Netlify). Please, don't forget this!

1. **Main task**.

   It should include that:

   1. Movies list
   2. Movie list Pagination (Infinite Scroll)
   3. Each movie card element consists of movie poster, title, year, and genre.

2. **Movie details**.
   It should include that:

   1. Poster
   2. Movie title
   3. Movie description
   4. Movie year
   5. Movie country
   6. Movie genre
   7. Demo player (It has to contain any video you want. Custom Video player is more prefered)
   8. Employees (who perform an action in the movie) images

3. **Note\***
   Please, pay attention to next caching feature!. It will be perfect, If you write comment on your code sections to estimate your nextjs working conception.

**Deadline** - 3 days until _(28.06.2024 15:00)_

**If your date is expired, the given APIs will not work. Please, try to submit your work till the deadline**

**Base API URL: `https://api.cinerama.uz/test`**

- Your Request Header:

```ts
{
  "Authorization": "Bearer DrTVm2Bi8pHE75xYsM94fjciuAhju2XM"
}
```

1. API to get Movies list:
   **`https://api.cinerama.uz/test/movies?module_id=3?page=1&items=4`**

- Request method: **GET**
- **page (in query)** - is used to paginate movies list
- **items (in query)** - is movies number in each page

**Response like this:**

```ts
{
  data: {
    movies: Array<{
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
    }>;
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  }
  code: number;
  message: string;
  status: boolean;
  tasix: boolean;
}
```

2. API to get Movie details:
   **`https://api.cinerama.uz/test/movies/view?module_id=3&id=${movieId}`**

- Request method: **GET**
- **id (in query)** - is movie id

**Response like that:**

```ts
{
  data: [
    {
      duration: number;
      episode: string | null;
      height: number;
      id: number;
      image: string;
      isWatched: boolean;
      lastPosition: number;
      order: number;
      quality: string;
      size: number;
      title: string;
      width: number;
    }
  ];
  code: number;
  message: string;
  status: boolean;
  tasix: boolean;
}
```
