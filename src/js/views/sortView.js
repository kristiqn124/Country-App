class Sort {
  _sortFilter = document.getElementById("region_filter");
  sortResult() {
    const country = document.querySelectorAll(".country");
    country.forEach((el) => {
      const countryName = el
        .querySelector(".country__region")
        .textContent.toLocaleLowerCase()
        .trim();

      if (
        countryName === this._sortFilter.value.toLocaleLowerCase().trim() ||
        this._sortFilter.value === "All"
      ) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    });
  }

  addHandlerSort(handler) {
    this._sortFilter.addEventListener("change", handler);
  }
}
export default new Sort();
