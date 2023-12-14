import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const page = 1;

export const TMDBAPI = createApi({
    reducerPath: 'TMDBAPI',
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => `movie/popular?page=${page}&api_key=face82254ca4b4892fe6f0e6ff9a608a`
        }),

        getMovie: builder.query({
            query: (id) =>
              `/movie/${id}?append_to_response=videos,credits&api_key=face82254ca4b4892fe6f0e6ff9a608a`,
          }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetMovieQuery,
} = TMDBAPI;
