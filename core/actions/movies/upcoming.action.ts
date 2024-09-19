import { movieApi } from "@/core/api/movie-api";
import { Movie, MovieDBMovieResponse } from "@/infrastructure/interfaces";
import { MovieMapper } from "@/infrastructure/mappers";



export const upcomingMoviesAction = async (): Promise<Movie[]> => {

    try {
        const { data } = await movieApi.get<MovieDBMovieResponse>('/upcoming');

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movies;
    } catch (error) {
        throw new Error('Error fetching upcoming movies');
    }
};