import { movieApi } from "@/core/api/movie-api";
import { Movie, MovieDBMoviesResponse } from "@/infrastructure/interfaces";
import { MovieMapper } from "@/infrastructure/mappers";

interface Options {
    page?: number;
    limit?: number;
}

export const topRatedMoviesAction = async ({page = 1, limit = 10}: Options): Promise<Movie[]> => {

    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
            params: {
                page,
            },
        });

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movies;
    } catch (error) {
        throw new Error('Error fetching top rated movies');
    }
};