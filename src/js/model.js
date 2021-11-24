import "core-js/stable";
import "regenerator-runtime";
import sortArray from "sort-array";
export const results = {
  countrys: [],
  country: {},
};

export const fetchAll = async function (country) {
  try {
    const response = country
      ? await fetch(`https://restcountries.com/v2/alpha/${country}`)
      : await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const loadRecipe = async function (id) {
  try {
    const data = await fetchAll(id);
    results.country = data;
  } catch (err) {
    throw err;
  }
};

// export const fetchCountryInfo = async function (country) {
//   try {
//     const response = await fetch(
//       `https://restcountries.com/v2/alpha/${country}`
//     );
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };

const objectCreate = function (data) {
  results.countrys = data.map((element) => {
    return {
      country: element.name.common,
      image: element.flags.png,
      population: element.population,
      region: element.region,
      capital: element.capital,
      isoCode: element.altSpellings[0],
      borders: element.borders,
    };
  });
};

export const insertData = async function () {
  try {
    const data = await fetchAll();
    objectCreate(data);
    sortArray(results.countrys, {
      by: "country",
      order: "desc",
    });
  } catch (err) {
    console.log(err);
  }
};
