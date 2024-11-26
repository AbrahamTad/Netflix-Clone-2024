import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests"; 
// import "./Banner.css"; 
import "./Banner2.css"; 

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const results = request.data.results || [];
        if (results.length > 0) {
          setMovie(results[Math.floor(Math.random() * results.length)]);
        } else {
          console.log("No results found");
        }
      } catch (error) {
        console.log("Error fetching Netflix Originals:", error);
      }
    };

    fetchData();
  }, []);

  // Function to truncate long movie descriptions
  const truncate = (str, n) =>
    str?.length > n ? str.substring(0, n - 1) + "..." : str;

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner_fadeBottom" />
    </div>
  );
}

export default Banner;

// import React, { useState, useEffect } from "react";
// import axios from "../../utils/axios";
// import requests from "../../utils/requests"; // API endpoints
// import "./Banner.css"; // Import CSS

// function Banner() {
//   const [movie, setMovie] = useState({});

//   useEffect(() => {
//     (async () => {
//       try {
//         const request = await axios.get(requests.fetchNetflixOriginals);
//         console.log(request.data);
//         setMovie(
//           request.data.results[
//             Math.floor(Math.random() * request.data.results.length)
//           ]
//         );

//         //  const request = await axios.get(requests.fetchNetflixOriginals);
//         //  console.log("API Response:", request.data);

//         //  const results = request.data?.results || [];
//         //  if (results.length > 0) {
//         //    setMovie(results[Math.floor(Math.random() * results.length)]);
//         //  } else {
//         //    console.log("No results found");
//         //  }
//       } catch (error) {
//         console.log("Error fetching Netflix Originals:", error);
//       }
//     })();
//   }, []);

//   // Function to truncate long movie descriptions
//   function truncate(str, n) {
//     return str?.length > n ? str.substring(0, n - 1) + "..." : str;
//   }

//   return (
//     <div
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="banner_contents">
//         <h1 className="banner_title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner_buttons">
//           <button className="banner_button play">Play</button>
//           <button className="banner_button">My List</button>
//         </div>

//         <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
//       </div>

//       <div className="banner_fadeBottom" />
//     </div>
//   );
// }

// export default Banner;
