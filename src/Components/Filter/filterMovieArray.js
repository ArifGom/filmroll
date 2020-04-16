export default (filters, movies) => {
  return movies
    .filter(movie => {
      return (
        filters.dateRange.gt <= parseInt(movie.release_date.slice(0, 4)) &&
        filters.dateRange.lt >= parseInt(movie.release_date.slice(0, 4)) &&
        filters.ratingRange.gt <= movie.vote_average &&
        filters.ratingRange.lt >= movie.vote_average &&
        (filters.genres && filters.genres.id && movie.genre_ids
          ? movie.genre_ids && movie.genre_ids.includes(filters.genres.id)
          : true)
      );
    })
    .sort((a, b) => {
      switch (filters.sortBy.id) {
        case 'popularity.desc':
          return b.popularity - a.popularity;
        case 'popularity.asc':
          return a.popularity - b.popularity;
        case 'predictedRating.desc':
          return b.predictedRating - a.predictedRating;
        case 'predictedRating.asc':
          return a.predictedRating - b.predictedRating;
        case 'myRating.desc':
          return b.rating - a.rating;
        case 'myRating.asc':
          return a.rating - b.rating;
        case 'vote_average.desc':
          return b.vote_average - a.vote_average;
        case 'vote_average.asc':
          return a.vote_average - b.vote_average;
        case 'primary_release_date.desc':
          return new Date(b.release_date) - new Date(a.release_date);

        case 'primary_release_date.asc':
          return new Date(a.release_date) - new Date(b.release_date);
        default:
          return 0;
      }
    });
};
