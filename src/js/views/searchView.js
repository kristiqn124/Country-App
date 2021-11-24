class Search {
  _searchInpunt = document.getElementById("search_input");
  searchResult() {
    const country = document.querySelectorAll(".country");
    const querry = this._searchInpunt.value.toLocaleLowerCase();
    country.forEach((el) => {
      const countryName = el.querySelector(".country__name");
      if (!countryName.innerHTML.toLocaleLowerCase().includes(querry)) {
        el.style.display = "none";
      } else {
        el.style.display = "block";
      }
    });
  }
  addHandlerSearch(handler) {
    this._searchInpunt.addEventListener("input", handler);
  }
}
export default new Search();
