import getResults from "./getResults.js";

const movieResult = getResults();
const customSearchApiKey = "AIzaSyCrKV9OI4vuC4o9dAEZmmVVDtmmFwyBQ7E";
const cx = "c31cf03289ac14f48";

// função para carregar resultados da pesquisa
export default function searchImages() {
  const url = `https://www.googleapis.com/customsearch/v1?key=${customSearchApiKey}&cx=${cx}&q=${movieResult}&searchType=image`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const images = data.items;
      const container = document.getElementById("movie-wallpapers"); 
      images.forEach((image) => {
        const img = document.createElement("img");
        img.src = image.link;
        container.appendChild(img); // adiciona a imagem ao contêiner
      });
    })
    .catch((error) => console.log(error));
}