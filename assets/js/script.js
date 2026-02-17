const albumArray = [];

window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".card-section .card");

  cards.forEach((element) => {
    let titolo = element.querySelector(".card-title").innerText.toLowerCase();
    let artista = element.querySelector("h3").innerText.toLowerCase();
    let infoParagraphs = element.querySelectorAll(".card-text");
    let anno = infoParagraphs[0]?.innerText.toLowerCase() || "";
    let genere = infoParagraphs[1]?.innerText.toLowerCase() || "";

    albumArray.push({
      titolo: titolo,
      artista: artista,
      anno: anno,
      genere: genere,

      container: element.closest(".col-6"),
    });
  });

  const searchForm = document.querySelector("form[role='search']");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchFunction();
  });
});

function searchFunction() {
  const searchInput = document
    .querySelector(".search-input")
    .value.toLowerCase();

  albumArray.forEach((album) => {
    const matches =
      album.titolo.includes(searchInput) ||
      album.artista.includes(searchInput) ||
      album.anno.includes(searchInput) ||
      album.genere.includes(searchInput);

    if (matches) {
      album.container.classList.remove("d-none");
    } else {
      album.container.classList.add("d-none");
    }
  });
}
