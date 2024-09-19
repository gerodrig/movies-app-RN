import { movieApi } from "@/core/api/movie-api";
import { Movie, MovieDBMovieResponse } from "@/infrastructure/interfaces";
import { MovieMapper } from "@/infrastructure/mappers";



export const topRatedMoviesAction = async (): Promise<Movie[]> => {

    try {
        const { data } = await movieApi.get<MovieDBMovieResponse>('/top_rated');

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movies;
    } catch (error) {
        throw new Error('Error fetching top rated movies');
    }
};