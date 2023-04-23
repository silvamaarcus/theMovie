import getResults from "./getResults.js";

// const theDbApiKey = "edd4216cc129bcc60ae4c4eb6370b44c";
const apiKey = "c643baab";
const youtubeApiKey = "AIzaSyCrKV9OI4vuC4o9dAEZmmVVDtmmFwyBQ7E";                       
const movieResult = getResults();

export default function showMovie() {
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieResult}`)
    .then((response) => response.json())
    .then((movie) => {
      document.getElementById("movie-poster").src = movie.Poster;

      document.getElementById("movie-title").textContent = `${movie.Title} (${movie.Year})`;
      document.getElementById("title-page").textContent = `The Moive | ${movie.Title} (${movie.Year})`;

      document.getElementById(
        "movie-subTitle"
      ).textContent = `${movie.Genre} • ${movie.Runtime}`;

      document.getElementById("movie-synopsis").textContent = movie.Plot;

      document.getElementById("writers").textContent = movie.Writer;

      document.getElementById("directors").textContent = movie.Director;

      // fetch(
      //   `https://www.googleapis.com/youtube/v3/search?part=id&q=${movieResult}+${movie.Year}+trailer&type=video&key=${youtubeApiKey}`
      // )
      //   .then((response) => response.json())
      //   .then((data) => {
      //     const trailerId = data.items[0].id.videoId;
      //     // Criar link para o trailer do filme no YouTube
      //     const trailerLink = `https://www.youtube.com/watch?v=${trailerId}`;
      //     console.log(
      //       `Link para o trailer do filme "${movieResult}": ${trailerLink}`
      //     );

      //     // Add o link do trailer no html.
      //     document.getElementById("link-trailer").href = trailerLink;
      //   })
      //   .catch((error) =>
      //     console.error(
      //       "Erro ao buscar informações do trailer do filme:",
      //       error
      //     )
      //   );

      const castNames = movie.Actors;
      const arrayNames = castNames.split(", ");
      console.log(arrayNames);
      const castList = document.getElementById("cast-list");

      arrayNames.forEach((actor) => {
        const newDiv = document.createElement("div");
        // const artistImg = document.createElement("img");
        const artist = document.createElement("li");
        castList.appendChild(newDiv);
        newDiv.appendChild(artist);
        artist.textContent = actor;
        // artistImg.setAttribute("src", "#");
        // artistImg.setAttribute("id", "profile");
      });

      document.getElementById("movie-released").textContent = movie.Released;

      document.getElementById("movie-country").textContent = movie.Country;

      document.getElementById("movie-BoxOffice").textContent = movie.BoxOffice;

      document.getElementById("movie-rating").textContent = `${movie.imdbRating}/10`;     
    })

    .catch((error) =>
      console.error("Erro ao buscar informações do filme:", error)
    );
}