import { getCountryNameByIso } from "country-codes-iso-converter";

class CountryInfo {
  _parenElement = document.querySelector(".outer_flex_c");
  _btnBack = document.querySelector(".btn_close");
  _infoPage = document.querySelector(".info_page");

  returnIsoCode(data) {
    document.querySelector(".bnt_container").style.display = "flex";
    this._infoPage.insertAdjacentHTML("afterbegin", this._markup(data));
  }

  clearDisplay() {
    this._infoPage.innerHTML = "";
    this._parenElement.style.display = "none";
  }
  returnBack() {
    this._parenElement.style.display = "flex";
    document.querySelector(".bnt_container").style.display = "none";
    this._infoPage.innerHTML = "";
  }

  addHandlerInfo(handler) {
    window.addEventListener("hashchange", handler);
  }
  addHandlerBtn(handler) {
    this._btnBack.addEventListener("click", handler);
  }

  _markup(el) {
    return `<div class="infoPage">
    <div class="info">
      <div class="flagImg">
        <img
          class="flag_img_info"
          src="${el.flags.png}"
          alt=""
        />
      </div>
      <div class="infoContent">
        <h3 class="country_header_info">${el.name}</h3>
        <div class="basicInfo">
          <div class="column1">
            <p class="info_row">Native name:  ${el.nativeName}</p>
            <p class="info_row">Population: ${el.population}</p>
            <p class="info_row">Region: ${el.region}</p>
            <p class="info_row">Sub region: ${el.subregion}</p>
            <p class="info_row">Capital: ${el.capital}</p>
          </div>
          <div class="column2">
            <p class="info_row">Top level domain: ${el.topLevelDomain}</p>
            <p class="info_row">Currencies: ${
              el.currencies?.[0].name ?? "..."
            }</p>
            <p class="info_row">Languages: ${el.languages[0].name}</p>
          </div>
        </div>
        <div class="borderContainer">

          <p>Border Countries:${
            el?.borders
              ?.map((border) => {
                return `
            <a class="border_button" href="#${border}">${getCountryNameByIso(
                  border
                ).replaceAll("_", " ")}</a>
            `;
              })
              .join("") ?? "..."
          } </p>
          
        </div>
      </div>
    </div>
    
  </div>
  `;
  }
}
export default new CountryInfo();
