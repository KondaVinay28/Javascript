async function apiData() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    console.log(result);
  } catch (e) {
    console.log("Error hitting the api request");
  }
}
apiData();
