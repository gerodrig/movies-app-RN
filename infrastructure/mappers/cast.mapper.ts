import { MovieDBCast, Cast } from "../interfaces";

export class CastMapper {
  static fromMovieDBCastToEntity(actor: MovieDBCast): Cast {
    return {
      id: actor.id,
        name: actor.name,
        character: actor.character ?? 'No Character',
        avatar: actor.profile_path
          ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
          : 'https://whttps://i.stack.imgur.com/l60Hf.png',
    };
  }
}