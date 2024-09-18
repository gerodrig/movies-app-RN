import { movieApi } from "@/core/api/movie-api";
import { Movie } from "@/infrastructure/interfaces";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers";


export const nowPlayingAction = async (): Promise<Movie[]> => {

    try {
        const {data} = await movieApi.get<MovieDBMovieResponse>('/now_playing');

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        // console.log(JSON.stringify(movies, null, 2));
        return movies;
    } catch (error) {
        throw new Error('Error fetching now playing movies');
    }
};