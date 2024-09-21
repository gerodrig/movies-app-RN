import { movieApi } from "@/core/api/movie-api";
import { Movie, MovieDBMoviesResponse } from "@/infrastructure/interfaces";
import { MovieMapper } from "@/infrastructure/mappers";



export const popularMoviesAction = async (): Promise<Movie[]> => {

    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/popular');

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movies;
    } catch (error) {
        throw new Error('Error fetching popular movies');
    }
};