const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  // Fetch trending movies and shows
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,

  // Fetch Netflix Originals
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

  // Fetch top-rated movies
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  // Fetch Action movies
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

  // Fetch Comedy movies
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

  // Fetch Horror movies
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

  // Fetch Romance movies
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  // Fetch Documentaries
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  // Fetch TV shows
  fetchTvShow: `/discover/tv?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
