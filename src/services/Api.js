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
            query: ({ genreName, Page }) => {


                //get movies by genre

                if (genreName && typeof genreName === 'number') {
                    return `discover/movie?with_genres=${genreName}&page=${page}&api_key=face82254ca4b4892fe6f0e6ff9a608a`
                }

                //get popular movies
                return `movie/popular?page=${page}&api_key=face82254ca4b4892fe6f0e6ff9a608a`;
            }
        }),

        getMovieByGenre: builder.query({
            query: () => `genre/movie/list?api_key=face82254ca4b4892fe6f0e6ff9a608a`
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetMovieQuery,
    useGetMovieByGenreQuery,
} = TMDBAPI;
