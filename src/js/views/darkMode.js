class DarkMode {
  _lightMode = document.querySelector(".light_mode");
  constructor() {
    this.addHandlerDarkMode();
  }
  mode(e) {
    e.preventDefault();
    const allcountry = document.querySelectorAll(".country");
    const allcountryData = document.querySelectorAll(".link_country");
    const navbar = document.querySelector(".navigation_bar ");
    const search = document.getElementById("search_input");
    const filter = document.getElementById("region_filter");
    const backBtn = document.getElementById("back_btn");
    const loader = document.querySelector(".loader");
    const loader_inner = document.querySelector(".loader-inner");
    document.body.classList.toggle("darkMode");
    allcountry.forEach((el) => {
      el.classList.toggle("darkMode2");
    });
    allcountryData.forEach((el) => {
      el.classList.toggle("darkmodeBtnLight");
    });
    search.classList.toggle("darkMode2");
    search.classList.toggle("darkmode_place");
    navbar.classList.toggle("darkMode2");
    filter.classList.toggle("darkMode2");
    backBtn.classList.toggle("darkModeBtn");
    this._lightMode.classList.toggle("darkmodeBtnLight");
    loader.classList.toggle("loader_color_light");
    loader_inner.classList.toggle("loader_inner_light");
  }
  addHandlerDarkMode() {
    this._lightMode.addEventListener("click", this.mode.bind(this));
  }
}
export default new DarkMode();
