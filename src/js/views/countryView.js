class CountryView {
  _data;
  _parentElement = document.querySelector(".results");

  render(data) {
    this._data = data.countrys;
    this._data.forEach((element) => {
      this._parentElement.insertAdjacentHTML(
        "afterbegin",
        this._markup(element)
      );
    });
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
  _markup(el) {
    return ` <article class="country"><a class="link_country" href="#${el.isoCode}">
      <img class="country__img" src="${el.image}" />
      <div class="country__data">
        <h3 class="country__name">${el.country}</h3>
        <p class="country__row">Popolation: ${el.population}</p>
        <p class="country__row">Region: <span class="country__region"> ${el.region}</span></p>
        <p class="country__row">Capiatal: ${el.capital}</p>
      </div>
      </a></article>`;
  }
}
export default new CountryView();
