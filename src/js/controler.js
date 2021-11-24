import * as model from "./model.js";
import "core-js/stable";
import "regenerator-runtime";
import countryView from "./views/countryView.js";
import searchView from "./views/searchView.js";
import sortView from "./views/sortView.js";
import countryInfoView from "./views/countryInfoView.js";
import darkMode from "./views/darkMode.js";
import load from "./views/load.js";
if (module.hot) {
  module.hot.accept();
}

const loadController = async function () {
  try {
    history.pushState(null, null, " ");
    load.render();
    if (model.results.countrys.length === 0) {
      await model.insertData();
      countryView.render(model.results);
    } else {
      countryInfoView.returnBack();
    }
    load.remove();
  } catch (err) {
    load.renderError(err);
  }
};

const searchController = function () {
  searchView.searchResult();
};
const sortController = function () {
  sortView.sortResult();
};
const infoController = async function () {
  try {
    countryInfoView.clearDisplay();
    load.render();
    const hash =
      location.hash.length > 4
        ? location.hash.slice(1, 4)
        : location.hash.slice(1);
    await model.loadRecipe(hash);
    countryInfoView.returnIsoCode(model.results.country);
    load.remove();
  } catch (err) {
    load.renderError(err);
  }
};

const init = function () {
  countryView.addHandlerRender(loadController);
  searchView.addHandlerSearch(searchController);
  sortView.addHandlerSort(sortController);
  countryInfoView.addHandlerInfo(infoController);
  countryInfoView.addHandlerBtn(loadController);
  darkMode;
};

init();
// --no-hmr --no-cache --no-source-maps
