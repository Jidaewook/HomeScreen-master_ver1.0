

const API_URL = "http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/workbook"

export const getMovies = async () => {
  const { results } = await fetch(API_URL).then((x) => x.json());
  const movies = results.map(
    ({
      _id,
      title,
      poster,
      // backdrop_path,
      // vote_average,
      desc,
      // release_date,
      genres_ids,
    }) => ({
      key: String(_id),
      title: title,
      poster: poster,
      // backdrop: getBackdropPath(backdrop_path),
      // rating: vote_average,
      description: desc,
      // releaseDate: release_date,
      genres: genres_ids.map(x => x),
    })
  );

  return movies;
};
