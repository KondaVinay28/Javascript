//First we have to install axios via cdn link or using npm
// const axios = require("axios"); //only applicable when installed axios with npm

// Making a GET request
axios
  .get("https://dummyjson.com/products")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
