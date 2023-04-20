export default function initSearch() {
  const inputSearch = document.getElementById("input-search");
  const btnSearch = document.getElementById("btn-search");

  const apiKey = "edd4216cc129bcc60ae4c4eb6370b44c";

  btnSearch.addEventListener("click", handleClick);

  function handleClick(event) {
    event.preventDefault();
    const inputSearchValue = inputSearch.value;
    getMovie(inputSearchValue);
    window.location.href = `https://www.themoviedb.org/movie/${getMovie}`;
  }

  function getMovie(inputSearchValue) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${inputSearchValue}&api_key=${apiKey}`
    )
      .then((r) => r.json())
      .then((movie) => {
        const movieId = movie.results[0].id; 
        console.log(`O ID do filme "${inputSearchValue}" é ${movieId}`);
        // redirecionando para nova página.
        window.location.href = "movie.html#result-search";
      })
      .catch((error) => console.error(error));
  }
}
