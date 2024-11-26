import { memo, useEffect, useState } from "react";
import LazyLoad from "react-lazyload"; // Import LazyLoad
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import "./row2.css";

const Row = memo(({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const request = await axios.get(fetchUrl);
        const request = await axios.get(
          `${fetchUrl}&fields=id,title,poster_path,backdrop_path`
        );

        setMovies(request.data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      try {
        const url = await movieTrailer(
          movie?.title || movie?.name || movie?.original_name || ""
        );
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      } catch (error) {
        console.error("Trailer not found:", error);
      }
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <LazyLoad key={movie.id} height={200} offset={100}>
            <img
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title || movie.name || movie.original_name}
            />
          </LazyLoad>
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
});

export default Row;

// import { useEffect, useState } from "react";
// import axios from "../../../utils/axios"; // Importing axios instance
// import movieTrailer from "movie-trailer"; // Library to search for trailers
// import YouTube from "react-youtube"; // YouTube component to play trailers
// import "./Row.css"; // Styles for the Row component

// // Functional component for the Row
// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   // State variables for storing movies data and trailer URL
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");

//   // Base URL for fetching movie posters from TMDB
//   const base_url = "https://image.tmdb.org/t/p/original";

//   // YouTube player options
//   const opts = {
//     height: "390", // Player height
//     width: "100%", // Player width to fit container
//     playerVars: { autoplay: 1 }, // Auto-play video on load
//   };

//   /**
//    * useEffect Hook:
//    * This effect runs when the component mounts or whenever `fetchUrl` changes.
//    * It fetches the movie data using the provided `fetchUrl`.
//    */
//   useEffect(() => {
//     // Define an Immediately Invoked Async Function Expression (IIFE)
//     (async () => {
//       try {
//         // Log the `fetchUrl` to the console for debugging
//         console.log(fetchUrl);

//         // Make an API request using axios to get the movies data
//         const request = await axios.get(fetchUrl);

//         // Update the `movies` state with the fetched results
//         setMovies(request.data.results || []); // Fallback to an empty array if `results` is undefined
//       } catch (error) {
//         // Log any errors during the API request
//         console.error("Error fetching movies:", error);
//       }
//     })(); // Call the IIFE immediately
//   }, [fetchUrl]); // Dependency array - only run effect when `fetchUrl` changes

//   /**
//    * Function to handle movie poster click:
//    * If a trailer is already playing, it stops the trailer.
//    * Otherwise, it searches for the trailer using `movie-trailer` library.
//    */
//   const handleClick = async (movie) => {
//     if (trailerUrl) {
//       // Close the trailer if it is already open
//       setTrailerUrl("");
//     } else {
//       try {
//         // Search for a trailer URL using the movie's title, name, or original name
//         const url = await movieTrailer(
//           movie?.title || movie?.name || movie?.original_name || ""
//         );

//         // Parse the YouTube URL to extract the video ID
//         const urlParams = new URLSearchParams(new URL(url).search);
//         setTrailerUrl(urlParams.get("v")); // Set the YouTube video ID as the trailer URL
//       } catch (error) {
//         // Log an error if the trailer is not found
//         console.error("Trailer not found:", error);
//       }
//     }
//   };

//   // Render the component's UI
//   return (
//     <div className="row">
//       {/* Display the row title */}
//       <h2>{title}</h2>

//       {/* Movie posters container */}
//       <div className="row__posters">
//         {/* Map through the movies array to render each movie poster */}
//         {movies.map((movie) => (
//           <img
//             key={movie.id} // Unique key for each movie
//             onClick={() => handleClick(movie)} // OnClick event to fetch trailer
//             className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`} // Conditional class for styling
//             src={`${base_url}${
//               isLargeRow ? movie.poster_path : movie.backdrop_path
//             }`} // Poster image URL
//             alt={movie.title || movie.name || movie.original_name} // Movie title for alt text
//           />
//         ))}
//       </div>

//       {/* YouTube player for the trailer */}
//       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//     </div>
//   );
// };

// export default Row;

// // import { useEffect, useState } from "react";
// // import axios from "../../../utils/axios";
// // import movieTrailer from "movie-trailer";
// // import YouTube from "react-youtube";
// // import "./Row.css";

// // // Arrow function for the Row component
// // const Row = ({ title, fetchUrl, isLargeRow }) => {
// //   // State to store movies and the trailer URL
// //   const [movies, setMovies] = useState([]);
// //   const [trailerUrl, setTrailerUrl] = useState("");
// //   const base_url = "https://image.tmdb.org/t/p/original";

// //   // YouTube player options
// //   const opts = {
// //     height: "390",
// //     width: "100%",
// //     playerVars: { autoplay: 1 },
// //   };

// //   // Fetch movies when component mounts or `fetchUrl` changes
// //   useEffect(() => {
// //     // Define an Immediately Invoked Async Function Expression (IIFE)
// //     (async () => {
// //       try {
// //         // Log the `fetchUrl` to the console for debugging purposes
// //         console.log(fetchUrl);

// //         // Make an API request using axios to get the movies data
// //         // `fetchUrl` is a dynamic endpoint passed as a prop to this component
// //         const request = await axios.get(fetchUrl);

// //         // Set the movies state with the fetched results
// //         // Check if `request.data.results` exists and set `movies` state
// //         setMovies(request.data.results || []);
// //       } catch (error) {
// //         // Log any errors that occur during the API request to the console
// //         console.error("Error fetching movies:", error);
// //       }
// //     })(); // Immediately invoked async function is called here
// //   }, [fetchUrl]); // `useEffect` dependency array - the effect runs when `fetchUrl` changes

// //   //   const fetchData = async () => {
// //   //     try {

// //   //       const { data } = await axios.get(fetchUrl);
// //   //        console.log(fetchData);

// //   //       setMovies(data.results || []); // Set movies array, fallback to empty if undefined
// //   //     } catch (error) {
// //   //       console.error("Error fetching movies:", error);
// //   //     }
// //   //   };
// //   //   fetchData();
// //   // }, [fetchUrl]);

// //   // Handle movie click to fetch and display trailer
// //   const handleClick = async (movie) => {
// //     // If trailer is already open, close it
// //     if (trailerUrl) {
// //       setTrailerUrl("");
// //     } else {
// //       try {
// //         // Search for the trailer URL using movie title/name
// //         const url = await movieTrailer(
// //           movie?.title || movie?.name || movie?.original_name || ""
// //         );
// //         const urlParams = new URLSearchParams(new URL(url).search);
// //         setTrailerUrl(urlParams.get("v")); // Set the YouTube video ID as the trailer URL
// //       } catch (error) {
// //         console.error("Trailer not found:", error);
// //       }
// //     }
// //   };

// //   return (
// //     <div className="row">
// //       <h2>{title}</h2>

// //       {/* Movie posters container */}
// //       <div className="row__posters">
// //         {movies.map((movie) => (
// //           <img
// //             key={movie.id}
// //             onClick={() => handleClick(movie)} // OnClick event to fetch trailer
// //             className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
// //             src={`${base_url}${
// //               isLargeRow ? movie.poster_path : movie.backdrop_path
// //             }`}
// //             alt={movie.title || movie.name || movie.original_name}
// //           />
// //         ))}
// //       </div>

// //       {/* YouTube player for the trailer */}
// //       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
// //     </div>
// //   );
// // };

// // export default Row;
